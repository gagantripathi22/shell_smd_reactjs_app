var child_process = require('child_process');

export function call() {
    child_process.execSync(`osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down'`);
}
