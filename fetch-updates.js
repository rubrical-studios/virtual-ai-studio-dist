#!/usr/bin/env node
/**
 * IDPF Framework Update Fetcher
 *
 * Updates the framework installation from the distribution repository.
 *
 * Usage: node fetch-updates.js
 *
 * This script:
 * 1. Reads framework-config.json to find the framework path
 * 2. Fetches the latest version from the dist repo
 * 3. Updates framework files while preserving project-specific files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ======================================
//  Configuration
// ======================================

const DIST_REPO = 'https://github.com/rubrical-studios/virtual-ai-studio-dist.git';
const TEMP_DIR = '.framework-update-temp';

// ======================================
//  Console Colors
// ======================================

const colors = {
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

function log(msg = '') { console.log(msg); }
function logSuccess(msg) { console.log(colors.green(msg)); }
function logWarning(msg) { console.log(colors.yellow(msg)); }
function logError(msg) { console.log(colors.red(msg)); }

// ======================================
//  Utility Functions
// ======================================

/**
 * Read framework-config.json
 */
function readConfig() {
  const configPath = path.join(process.cwd(), 'framework-config.json');
  if (!fs.existsSync(configPath)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch {
    return null;
  }
}

/**
 * Read version from framework-manifest.json
 */
function readVersion(frameworkPath) {
  const manifestPath = path.join(frameworkPath, 'framework-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    return null;
  }
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    return manifest.version || null;
  } catch {
    return null;
  }
}

/**
 * Get latest version from dist repo
 */
function getLatestVersion() {
  try {
    const result = execSync(`git ls-remote --tags ${DIST_REPO}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    const tags = result
      .split('\n')
      .filter(line => line.includes('refs/tags/v'))
      .map(line => {
        const match = line.match(/refs\/tags\/(v[\d.]+)/);
        return match ? match[1] : null;
      })
      .filter(Boolean)
      .sort((a, b) => {
        const aParts = a.slice(1).split('.').map(Number);
        const bParts = b.slice(1).split('.').map(Number);
        for (let i = 0; i < 3; i++) {
          if (aParts[i] !== bParts[i]) return bParts[i] - aParts[i];
        }
        return 0;
      });
    return tags[0] || null;
  } catch {
    return null;
  }
}

/**
 * Remove directory recursively
 */
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

/**
 * Copy directory recursively
 */
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ======================================
//  Main Update Process
// ======================================

async function main() {
  log();
  log(colors.cyan('╔══════════════════════════════════════╗'));
  log(colors.cyan('║   IDPF Framework Update Fetcher      ║'));
  log(colors.cyan('╚══════════════════════════════════════╝'));
  log();

  // Read config
  const config = readConfig();
  if (!config) {
    logError('ERROR: framework-config.json not found');
    logError('Run this script from your project directory');
    process.exit(1);
  }

  const frameworkPath = config.frameworkPath;
  if (!frameworkPath || !fs.existsSync(frameworkPath)) {
    logError(`ERROR: Framework path not found: ${frameworkPath}`);
    process.exit(1);
  }

  // Get current version
  const currentVersion = readVersion(frameworkPath);
  log(`  Framework path: ${colors.cyan(frameworkPath)}`);
  log(`  Current version: ${currentVersion ? colors.yellow(currentVersion) : colors.dim('unknown')}`);
  log();

  // Get latest version
  log(colors.dim('Checking for updates...'));
  const latestVersion = getLatestVersion();

  if (!latestVersion) {
    logError('ERROR: Could not fetch latest version from dist repo');
    process.exit(1);
  }

  log(`  Latest version: ${colors.green(latestVersion.slice(1))}`);
  log();

  // Compare versions
  if (currentVersion && `v${currentVersion}` === latestVersion) {
    logSuccess('Already up to date!');
    process.exit(0);
  }

  // Clone dist repo to temp directory
  log(colors.dim('Downloading update...'));
  removeDir(TEMP_DIR);

  try {
    execSync(`git clone --depth 1 --branch ${latestVersion} ${DIST_REPO} ${TEMP_DIR}`, {
      stdio: ['pipe', 'pipe', 'pipe'],
    });
  } catch (err) {
    logError('ERROR: Failed to download update');
    removeDir(TEMP_DIR);
    process.exit(1);
  }

  // Clear framework directory (except git if present)
  log(colors.dim('Updating framework files...'));
  const entries = fs.readdirSync(frameworkPath);
  for (const entry of entries) {
    if (entry === '.git') continue;
    const entryPath = path.join(frameworkPath, entry);
    fs.rmSync(entryPath, { recursive: true, force: true });
  }

  // Copy from temp to framework path
  const tempEntries = fs.readdirSync(TEMP_DIR);
  for (const entry of tempEntries) {
    if (entry === '.git') continue;
    const srcPath = path.join(TEMP_DIR, entry);
    const destPath = path.join(frameworkPath, entry);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }

  // Cleanup
  removeDir(TEMP_DIR);

  // Update config version
  config.installedVersion = latestVersion.slice(1);
  config.installedDate = new Date().toISOString().split('T')[0];
  fs.writeFileSync(
    path.join(process.cwd(), 'framework-config.json'),
    JSON.stringify(config, null, 2)
  );

  log();
  logSuccess(`Updated to version ${latestVersion.slice(1)}`);
  log();
  log(colors.dim('Updated framework-config.json with new version.'));
  log();
}

main().catch(err => {
  logError(`Error: ${err.message}`);
  removeDir(TEMP_DIR);
  process.exit(1);
});
