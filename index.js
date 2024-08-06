const fs = require("fs");

function logInfo(message) {
  fs.appendFileSync(
    "./logs/app.log",
    `${new Date().toISOString()} | INFO | ${message}\n\n`
  );
}

function logWarning(message) {
  fs.appendFileSync(
    "./logs/app.log",
    `${new Date().toISOString()} | WARNING | ${message}\n\n`
  );
}

function logError(message) {
  fs.appendFileSync(
    "./logs/app.log",
    `${new Date().toISOString()} | ERROR | ${message}\n\n`
  );
}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
