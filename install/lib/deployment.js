/**
 * deployment.js - Rules, hooks, and commands deployment for IDPF Framework Installer
 * @module install/lib/deployment
 */

const fs = require('fs');
const path = require('path');
const { generateStartupRules } = require('./generation');

/**
 * Deploy rules to .claude/rules/ directory
 */
function deployRules(projectDir, frameworkPath, processFramework, domainListStr, primarySpecialist, enableGitHubWorkflow) {
  const rulesDir = path.join(projectDir, '.claude', 'rules');
  fs.mkdirSync(rulesDir, { recursive: true });

  const results = { antiHallucination: false, githubWorkflow: false, startup: false };

  // Copy anti-hallucination rules (always)
  const ahSrc = path.join(frameworkPath, 'Assistant', 'Anti-Hallucination-Rules-for-Software-Development.md');
  const ahDest = path.join(rulesDir, '01-anti-hallucination.md');
  if (fs.existsSync(ahSrc)) {
    // Read source and add version header
    const ahContent = fs.readFileSync(ahSrc, 'utf8');
    const ahWithHeader = `# Anti-Hallucination Rules for Software Development

**Version:** 1.0
**Source:** Assistant/Anti-Hallucination-Rules-for-Software-Development.md

---

${ahContent.replace(/^# Anti-Hallucination Rules for Software Development\s*\n*/, '')}`;
    fs.writeFileSync(ahDest, ahWithHeader);
    results.antiHallucination = true;
  }

  // Copy GitHub workflow (if enabled)
  if (enableGitHubWorkflow) {
    const ghSrc = path.join(frameworkPath, 'Reference', 'GitHub-Workflow.md');
    const ghDest = path.join(rulesDir, '02-github-workflow.md');
    if (fs.existsSync(ghSrc)) {
      // Read source and add version header
      const ghContent = fs.readFileSync(ghSrc, 'utf8');
      const ghWithHeader = `# GitHub Workflow Integration

**Version:** 1.0
**Source:** Reference/GitHub-Workflow.md

---

${ghContent.replace(/^# GitHub Workflow Integration\s*\n*/, '')}`;
      fs.writeFileSync(ghDest, ghWithHeader);
      results.githubWorkflow = true;
    }
  }

  // Generate startup rules
  const startupContent = generateStartupRules(frameworkPath, processFramework, domainListStr, primarySpecialist);
  fs.writeFileSync(path.join(rulesDir, '03-startup.md'), startupContent);
  results.startup = true;

  return results;
}

/**
 * Deploy workflow hook to .claude/hooks/
 */
function deployWorkflowHook(projectDir, frameworkPath) {
  const hooksDir = path.join(projectDir, '.claude', 'hooks');
  fs.mkdirSync(hooksDir, { recursive: true });

  // Look in Templates/hooks/ (bundled location for distribution)
  const srcHook = path.join(frameworkPath, 'Templates', 'hooks', 'workflow-trigger.js');
  const destHook = path.join(hooksDir, 'workflow-trigger.js');

  if (fs.existsSync(srcHook)) {
    fs.copyFileSync(srcHook, destHook);
    return true;
  }
  return false;
}

/**
 * Deploy Git pre-push hook to prevent unauthorized tag pushes
 * Copies from Templates/hooks/pre-push to .git/hooks/pre-push
 */
function deployGitPrePushHook(projectDir, frameworkPath) {
  const gitHooksDir = path.join(projectDir, '.git', 'hooks');

  // Check if .git directory exists (project must be a git repo)
  if (!fs.existsSync(path.join(projectDir, '.git'))) {
    return { success: false, reason: 'not-git-repo' };
  }

  // Create hooks directory if it doesn't exist
  fs.mkdirSync(gitHooksDir, { recursive: true });

  const srcHook = path.join(frameworkPath, 'Templates', 'hooks', 'pre-push');
  const destHook = path.join(gitHooksDir, 'pre-push');

  if (!fs.existsSync(srcHook)) {
    return { success: false, reason: 'source-not-found' };
  }

  // Check if hook already exists
  if (fs.existsSync(destHook)) {
    // Read existing hook to check if it's ours
    const existing = fs.readFileSync(destHook, 'utf8');
    if (existing.includes('Pre-push hook: Prevents unauthorized version tag pushes')) {
      // Our hook already installed - update it
      fs.copyFileSync(srcHook, destHook);
      try { fs.chmodSync(destHook, 0o755); } catch (e) { /* Windows may not support chmod */ }
      return { success: true, action: 'updated' };
    } else {
      // Different hook exists - don't overwrite
      return { success: false, reason: 'hook-exists' };
    }
  }

  // Install hook
  fs.copyFileSync(srcHook, destHook);
  try { fs.chmodSync(destHook, 0o755); } catch (e) { /* Windows may not support chmod */ }
  return { success: true, action: 'installed' };
}

/**
 * Deploy workflow commands and scripts for GitHub workflow integration
 * Copies from Templates/commands/ and Templates/scripts/ to project .claude/
 */
function deployWorkflowCommands(projectDir, frameworkPath) {
  const commandsDir = path.join(projectDir, '.claude', 'commands');
  const scriptsDir = path.join(projectDir, '.claude', 'scripts');
  fs.mkdirSync(commandsDir, { recursive: true });
  fs.mkdirSync(scriptsDir, { recursive: true });

  const workflowCommands = [
    'assign-release',
    'switch-release',
    'transfer-issue',
    'plan-sprint',
    'sprint-status',
    'sprint-retro',
    'end-sprint',
    'open-release',
    'close-release'
  ];

  const deployed = { commands: [], scripts: [] };

  for (const cmd of workflowCommands) {
    // Deploy command (.md file)
    const srcCmd = path.join(frameworkPath, 'Templates', 'commands', `${cmd}.md`);
    const destCmd = path.join(commandsDir, `${cmd}.md`);
    if (fs.existsSync(srcCmd)) {
      fs.copyFileSync(srcCmd, destCmd);
      deployed.commands.push(cmd);
    }

    // Deploy script (.js file)
    const srcScript = path.join(frameworkPath, 'Templates', 'scripts', `${cmd}.js`);
    const destScript = path.join(scriptsDir, `${cmd}.js`);
    if (fs.existsSync(srcScript)) {
      fs.copyFileSync(srcScript, destScript);
      deployed.scripts.push(cmd);
    }
  }

  return deployed;
}

/**
 * REQ-010: Display GitHub setup success information
 */
function displayGitHubSetupSuccess(repoUrl, projectUrl) {
  const { log, logCyan, logSuccess, colors } = require('./ui');

  log();
  logCyan('╔══════════════════════════════════════╗');
  logCyan('║     GitHub Setup Complete!           ║');
  logCyan('╚══════════════════════════════════════╝');
  log();
  if (repoUrl) {
    log(`  ${colors.dim('Repository:')}     ${colors.green(repoUrl)}`);
  }
  if (projectUrl) {
    log(`  ${colors.dim('Project Board:')}  ${colors.green(projectUrl)}`);
  }
  log();
  logSuccess('GitHub integration setup complete!');
  log();
}

module.exports = {
  deployRules,
  deployWorkflowHook,
  deployGitPrePushHook,
  deployWorkflowCommands,
  displayGitHubSetupSuccess,
};
