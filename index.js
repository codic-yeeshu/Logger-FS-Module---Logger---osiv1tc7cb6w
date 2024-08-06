const fs = require("fs");

function update(type, message) {
  fs.appendFileSync(
    "./logs/app.log",
    `${new Date().toISOString()} | ${type} | ${message}\n\n`
  );
}
function logInfo(message) {
  update("INFO", message);
}

function logWarning(message) {
  update("WARNING", message);
}

function logError(message) {
  update("ERROR", message);
}

logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
