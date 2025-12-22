#!/usr/bin/env node
/**
 * assign-release.js
 *
 * Interactive script to assign issues to releases.
 * Used by /assign-release slash command.
 *
 * Implements: REQ-007 (Assign-Release Command)
 * Source: PRD/PRD-Release-and-Sprint-Workflow.md
 *
 * Usage:
 *   node assign-release.js                     # Interactive mode
 *   node assign-release.js release/v1.0 123    # Direct assignment (fast - skips epic check)
 *   node assign-release.js release/v1.0 --all  # Assign all unassigned to release
 *
 * Flags:
 *   --all         Assign all unassigned backlog issues
 *   --check-epic  Force epic detection for single issues (slower)
 *   --refresh     Force refresh of cached release list
 *
 * Performance: Single issue assignment skips epic check (~500ms faster)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Cache file for release list (avoids repeated API calls)
const CACHE_FILE = path.join(process.cwd(), '.claude', 'scripts', '.release-cache.json');
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

function exec(cmd) {
    try {
        return execSync(cmd, { encoding: 'utf-8' }).trim();
    } catch (e) {
        return null;
    }
}

/**
 * Get the last version from git tags
 * Returns { major, minor, patch } or null
 */
function getLastVersion() {
    try {
        const tag = exec('git describe --tags --abbrev=0 2>/dev/null');
        if (tag) {
            // Parse vX.Y.Z or X.Y.Z
            const match = tag.match(/v?(\d+)\.(\d+)\.(\d+)/);
            if (match) {
                return {
                    major: parseInt(match[1], 10),
                    minor: parseInt(match[2], 10),
                    patch: parseInt(match[3], 10),
                    raw: tag
                };
            }
        }
    } catch {}
    return null;
}

/**
 * Get issue labels for a given issue number
 */
function getIssueLabels(issueNumber) {
    try {
        const result = exec(`gh issue view ${issueNumber} --json labels -q ".labels[].name"`);
        return result ? result.split('\n').filter(l => l.trim()) : [];
    } catch {}
    return [];
}

/**
 * Generate branch name suggestions based on context
 * Returns array of { branch, description, recommended }
 */
function generateBranchSuggestions(lastVersion, userInput, labels) {
    const suggestions = [];
    const hasBugLabel = labels.some(l => l.toLowerCase() === 'bug' || l.toLowerCase() === 'hotfix');
    const hasFeatureLabel = labels.some(l => ['enhancement', 'feature', 'epic', 'story'].includes(l.toLowerCase()));

    // Parse user input for version hints
    let userVersionHint = null;
    if (userInput) {
        const match = userInput.match(/v?(\d+)\.(\d+)(?:\.(\d+))?/);
        if (match) {
            userVersionHint = {
                major: parseInt(match[1], 10),
                minor: parseInt(match[2], 10),
                patch: match[3] ? parseInt(match[3], 10) : 0
            };
        }
    }

    if (lastVersion) {
        // Suggest next patch version
        const nextPatch = `v${lastVersion.major}.${lastVersion.minor}.${lastVersion.patch + 1}`;
        suggestions.push({
            branch: `patch/${nextPatch}`,
            description: `Next patch version (bug fixes only)`,
            recommended: hasBugLabel && !hasFeatureLabel
        });

        // Suggest next minor version
        const nextMinor = `v${lastVersion.major}.${lastVersion.minor + 1}.0`;
        suggestions.push({
            branch: `release/${nextMinor}`,
            description: `Next minor version (new features)`,
            recommended: hasFeatureLabel && !hasBugLabel
        });

        // Suggest next major version (only if significant)
        const nextMajor = `v${lastVersion.major + 1}.0.0`;
        suggestions.push({
            branch: `release/${nextMajor}`,
            description: `Next major version (breaking changes)`
        });
    }

    // If user provided input, add their suggestion
    if (userInput && !userInput.startsWith('release/') && !userInput.startsWith('patch/')) {
        const cleanName = userInput.replace(/^v/, '').replace(/[^a-zA-Z0-9.-]/g, '-');
        if (hasBugLabel) {
            suggestions.push({
                branch: `patch/${cleanName}`,
                description: `Your input with patch prefix`
            });
        } else {
            suggestions.push({
                branch: `release/${cleanName}`,
                description: `Your input with release prefix`
            });
        }
    }

    // If user provided a full branch name, add it
    if (userInput && (userInput.startsWith('release/') || userInput.startsWith('patch/'))) {
        suggestions.unshift({
            branch: userInput,
            description: `Your specified branch`,
            recommended: true
        });
    }

    // Mark first as recommended if none marked yet
    if (suggestions.length > 0 && !suggestions.some(s => s.recommended)) {
        suggestions[0].recommended = true;
    }

    return suggestions;
}

function getCachedReleases(forceRefresh = false) {
    if (forceRefresh) return null;

    try {
        if (fs.existsSync(CACHE_FILE)) {
            const cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
            if (Date.now() - cache.timestamp < CACHE_TTL_MS) {
                return cache.releases;
            }
        }
    } catch {}
    return null;
}

function cacheReleases(releases) {
    try {
        fs.writeFileSync(CACHE_FILE, JSON.stringify({
            timestamp: Date.now(),
            releases
        }));
    } catch {}
}

function getSubIssueCount(issueNumber) {
    try {
        const result = exec(`gh pmu sub list ${issueNumber} --json`);
        if (result) {
            const data = JSON.parse(result);
            // sub list returns { children: [...] } or similar
            if (data.children) return data.children.length;
            if (Array.isArray(data)) return data.length;
        }
        return 0;
    } catch {
        return 0;
    }
}

function getOpenReleases(forceRefresh = false) {
    // Try cache first
    const cached = getCachedReleases(forceRefresh);
    if (cached) return cached;

    try {
        const result = exec('gh pmu release list');
        if (result) {
            // Parse table output: VERSION, CODENAME, TRACKER, STATUS
            // Skip header lines (first 2 lines: header + separator)
            const lines = result.split('\n').slice(2);
            const releases = [];
            for (const line of lines) {
                if (!line.trim()) continue;
                // Split by whitespace, handling variable spacing
                const parts = line.trim().split(/\s+/);
                if (parts.length >= 4) {
                    const version = parts[0];
                    const status = parts[parts.length - 1]; // STATUS is last column
                    // Filter for Active releases only
                    if (status === 'Active') {
                        releases.push({ version, name: version });
                    }
                }
            }
            // Cache for next time
            cacheReleases(releases);
            return releases;
        }
    } catch {
        // Release list might not be available
    }
    return [];
}

function getBacklogIssues() {
    try {
        const result = exec('gh pmu list --status backlog --json');
        if (result) {
            const data = JSON.parse(result);
            const items = data.items || data || [];
            // Filter to only issues without release assignment
            return items.filter(i => !i.fieldValues?.Release);
        }
    } catch {
        console.error('Error fetching backlog issues');
    }
    return [];
}

function assignToRelease(issueNumber, release) {
    try {
        // gh pmu move doesn't support --release yet, use workaround
        // For now, output what should be done
        console.log(`  → Assigning #${issueNumber} to ${release}`);
        // Try gh pmu if it supports release assignment
        const result = exec(`gh pmu move ${issueNumber} --release "${release}" 2>&1`);
        if (result && result.includes('unknown flag')) {
            // Fallback: note that gh pmu doesn't support --release yet
            console.log(`    (Note: gh pmu --release not yet supported, manual assignment needed)`);
            return false;
        }
        return true;
    } catch {
        return false;
    }
}

function main() {
    const args = process.argv.slice(2);

    // Parse args
    const assignAll = args.includes('--all');
    const checkEpic = args.includes('--check-epic');
    const forceRefresh = args.includes('--refresh');
    let release = args.find(a => a.startsWith('release/') || a.startsWith('patch/') || a.startsWith('hotfix/'));
    let issueNumbers = args.filter(a => a.match(/^#?\d+$/)).map(a => parseInt(a.replace('#', ''), 10));
    // Capture any other args that might be user input (version hints like "v2.15-fixes")
    const userInput = args.find(a => !a.startsWith('-') && !a.startsWith('release/') && !a.startsWith('patch/') && !a.startsWith('hotfix/') && !a.match(/^#?\d+$/));

    console.log('=== Assign-Release ===\n');

    // Step 1: Get releases (use cache unless --refresh)
    const releases = getOpenReleases(forceRefresh);

    if (!release) {
        if (releases.length === 0) {
            // No open releases - output structured suggestions for Claude to parse
            console.log('NO_RELEASE_FOUND');
            console.log('');

            // Gather context for suggestions
            const lastVersion = getLastVersion();
            const labels = issueNumbers.length > 0 ? getIssueLabels(issueNumbers[0]) : [];

            console.log(`CONTEXT:`);
            console.log(`  Last version: ${lastVersion ? lastVersion.raw : '(none)'}`);
            if (issueNumbers.length > 0) {
                console.log(`  Issue: #${issueNumbers[0]}`);
                console.log(`  Labels: ${labels.length > 0 ? labels.join(', ') : '(none)'}`);
            }
            if (userInput) {
                console.log(`  User input: ${userInput}`);
            }
            console.log('');

            // Generate and output suggestions
            const suggestions = generateBranchSuggestions(lastVersion, userInput, labels);

            if (suggestions.length > 0) {
                console.log('SUGGESTIONS:');
                suggestions.forEach((s, i) => {
                    const recMarker = s.recommended ? ' (recommended)' : '';
                    console.log(`${i + 1}|${s.branch}|${s.description}${recMarker}`);
                });
            } else {
                console.log('SUGGESTIONS:');
                console.log('1|release/v1.0.0|Initial release');
                console.log('2|patch/v0.0.1|Initial patch');
            }

            console.log('');
            console.log('ACTION_REQUIRED: Use AskUserQuestion to let user select a branch, then run:');
            console.log('  gh pmu release start --branch "<selected-branch>"');
            return;
        }

        console.log('Open Releases:');
        releases.forEach((r, i) => {
            const name = r.name || r.version || r;
            console.log(`  ${i + 1}. ${name}`);
        });
        console.log('\nUsage: /assign-release <release> [#issue...] [--all]');
        console.log('Example: /assign-release release/v2.0.0 #123 #124');
        console.log('Example: /assign-release release/v2.0.0 --all\n');
        return;
    }

    // Step 2: Get issues to assign
    if (issueNumbers.length === 0) {
        const backlog = getBacklogIssues();

        if (backlog.length === 0) {
            console.log('No unassigned backlog issues found.');
            return;
        }

        if (assignAll) {
            issueNumbers = backlog.map(i => i.number);
            console.log(`Assigning all ${issueNumbers.length} unassigned backlog issues to ${release}...\n`);
        } else {
            // Group by type for display
            const epics = backlog.filter(i => i.labels?.includes('epic'));
            const bugs = backlog.filter(i => i.labels?.includes('bug'));
            const enhancements = backlog.filter(i => i.labels?.includes('enhancement'));
            const stories = backlog.filter(i => i.labels?.includes('story'));
            const other = backlog.filter(i =>
                !['epic', 'bug', 'enhancement', 'story'].some(l => i.labels?.includes(l))
            );

            console.log(`Unassigned backlog issues (${backlog.length} total):\n`);

            if (epics.length > 0) {
                console.log('── Epics ──');
                epics.forEach(i => {
                    const subCount = getSubIssueCount(i.number);
                    console.log(`  #${i.number} - ${i.title} (${subCount} sub-issues)`);
                });
            }

            if (bugs.length > 0) {
                console.log('\n── Bugs ──');
                bugs.forEach(i => console.log(`  #${i.number} - ${i.title}`));
            }

            if (enhancements.length > 0) {
                console.log('\n── Enhancements ──');
                enhancements.forEach(i => console.log(`  #${i.number} - ${i.title}`));
            }

            if (stories.length > 0) {
                console.log('\n── Stories ──');
                stories.forEach(i => console.log(`  #${i.number} - ${i.title}`));
            }

            if (other.length > 0) {
                console.log('\n── Other ──');
                other.forEach(i => console.log(`  #${i.number} - ${i.title}`));
            }

            console.log('\n---');
            console.log(`To assign specific issues: /assign-release ${release} #N #M ...`);
            console.log(`To assign all: /assign-release ${release} --all`);
            return;
        }
    }

    // Step 3: Confirm if large selection
    if (issueNumbers.length >= 20) {
        console.log(`WARNING: About to assign ${issueNumbers.length} issues to ${release}.`);
        console.log('If this is too many, cancel and specify individual issue numbers.\n');
    }

    // Step 4: Assign issues
    let totalAssigned = 0;
    let epicCount = 0;
    let subIssueCount = 0;

    // Performance: Skip epic check for single issues unless --check-epic is passed
    // This saves ~500ms per issue by avoiding the gh issue view API call
    const shouldCheckEpic = checkEpic || issueNumbers.length > 1 || assignAll;

    console.log(`Assigning to ${release}:\n`);

    for (const num of issueNumbers) {
        let isEpic = false;

        // Only check for epic if needed (multiple issues, --all, or --check-epic)
        if (shouldCheckEpic) {
            const labelsResult = exec(`gh issue view ${num} --json labels -q ".labels[].name"`);
            const labels = labelsResult || '';
            isEpic = labels.includes('epic');
        }

        if (isEpic) {
            epicCount++;
            // Get and assign sub-issues
            const subResult = exec(`gh pmu sub list ${num} --json`);
            if (subResult) {
                try {
                    const subData = JSON.parse(subResult);
                    const children = subData.children || [];
                    for (const sub of children) {
                        const subNum = sub.number || sub;
                        if (assignToRelease(subNum, release)) {
                            subIssueCount++;
                            totalAssigned++;
                        }
                    }
                } catch {}
            }
        }

        if (assignToRelease(num, release)) {
            totalAssigned++;
        }
    }

    console.log(`\n✓ ${totalAssigned} issues assigned to ${release}`);
    if (epicCount > 0) {
        console.log(`  (${epicCount} epics with ${subIssueCount} sub-issues)`);
    }
    if (!shouldCheckEpic && issueNumbers.length === 1) {
        console.log(`  (epic check skipped for single issue - use --check-epic if needed)`);
    }
}

main();
