/**
 * LOGGER 모듈
 */
window.LOGGER = (function moduleLOGGER(global) {
  'use strict'

  // 메시지 스타일
  var MESSAGE_STYLES = {
    log: '\
      color: #3a3a3a;\
      font-weight: bold;\
    ',
    warn: '\
      color: #ce7a2b;\
      font-weight: bold;\
    ',
    error: '\
      color: #c31414;\
      font-weight: bold;\
    ',
    success: '\
      color: #1db6b6;\
      font-weight: bold;\
    ',
  }

  /* -------------------------------------------------------------------------- */
  // 메시지 유틸리티

  function log(message, cssText) {
    cssText = cssText || MESSAGE_STYLES.log
    console.log('%c' + message, cssText)
    return message
  }

  function warn(message, cssText) {
    cssText = cssText || MESSAGE_STYLES.warn
    return log(message, cssText)
  }

  function error(message, cssText) {
    cssText = cssText || MESSAGE_STYLES.error
    return log(message, cssText)
  }

  function success(message, cssText) {
    cssText = cssText || MESSAGE_STYLES.success
    return log(message, cssText)
  }

  /* -------------------------------------------------------------------------- */
  // 모듈 내보내기

  return {
    log,
    warn,
    error,
    success,
  }
})(window)
