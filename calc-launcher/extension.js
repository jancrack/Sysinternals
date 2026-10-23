const vscode = require('vscode');
const { execFile } = require('child_process');

function activate(context) {
    const command = vscode.commands.registerCommand(
        'calc-launcher.launchCalc',
        () => {
            execFile('calc.exe', (error) => {
                if (error) {
                    vscode.window.showErrorMessage(error.message);
                }
            });
        }
    );

    context.subscriptions.push(command);
}

function deactivate() {}

module.exports = { activate, deactivate };
