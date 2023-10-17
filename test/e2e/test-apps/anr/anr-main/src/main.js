const crypto = require('crypto');

const { app } = require('electron');
const { init, enableAnrDetection } = require('@sentry/electron/main');

init({
  dsn: '__DSN__',
  debug: true,
  autoSessionTracking: false,
  onFatalError: () => {},
});

function longWork() {
  for (let i = 0; i < 100; i++) {
    const salt = crypto.randomBytes(128).toString('base64');
    // eslint-disable-next-line no-unused-vars
    const hash = crypto.pbkdf2Sync('myPassword', salt, 10000, 512, 'sha512');
  }
}

enableAnrDetection({ mainProcess: { debug: true, anrThreshold: 1000, captureStackTrace: true } }).then(() => {
  console.log('main app code');
  app.on('ready', () => {
    setTimeout(() => {
      longWork();
    }, 1000);
  });
});