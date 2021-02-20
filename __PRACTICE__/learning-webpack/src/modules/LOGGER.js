const MESSAGE_STYLES = {
  log: `
    color: #3a3a3a;
    font-weight: bold;
  `,
  warn: `
    color: #ce7a2b;
    font-weight: bold;
  `,
  error: `
    color: #c31414;
    font-weight: bold;
  `,
  success: `
    color: #1db6b6;
    font-weight: bold;
  `,
}

/* -------------------------------------------------------------------------- */

export function log(message, cssText) {
  console.log(`%c${message}`, cssText)
  return message
}

export function warn(message, cssText = MESSAGE_STYLES.warn) {
  return log(message, cssText)
}

export function error(message, cssText = MESSAGE_STYLES.error) {
  return log(message, cssText)
}

export function success(message, cssText = MESSAGE_STYLES.success) {
  return log(message, cssText)
}
