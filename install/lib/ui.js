/**
 * ui.js - Console UI helpers for IDPF Framework Installer
 * @module install/lib/ui
 */

// Console Colors (no dependencies)
const colors = {
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
};

function log(msg = '') {
  console.log(msg);
}

function logSuccess(msg) {
  console.log(colors.green(msg));
}

function logWarning(msg) {
  console.log(colors.yellow(msg));
}

function logError(msg) {
  console.log(colors.red(msg));
}

function logCyan(msg) {
  console.log(colors.cyan(msg));
}

function divider() {
  log(colors.cyan('───────────────────────────────────────'));
}

module.exports = {
  colors,
  log,
  logSuccess,
  logWarning,
  logError,
  logCyan,
  divider,
};
