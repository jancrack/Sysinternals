
const vscode = require('vscode');
const { execFile } = require('child_process');

function activate(context) {
    vscode.window.showInformationMessage(
        'Calculator Launcher activated!'
    );

    // Launch Calculator automatically when the extension activates.
    execFile('calc.exe', (error) => {
        if (error) {
            vscode.window.showErrorMessage(
                `Failed to launch Calculator: ${error.message}`
            );
        }
    });

    // Keep the manual command available as well.
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

module.exports = {
    activate,
    deactivate
};
