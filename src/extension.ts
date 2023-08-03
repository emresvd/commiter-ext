import * as vscode from 'vscode';

/**
 * Runs a command in the VS Code terminal. If a terminal already exists, the command is executed in that terminal.
 * Otherwise, a new terminal is created and the command is executed in that terminal.
 * @param command The command to execute in the terminal.
 */
function runCommand(command: string) {
	if (vscode.window.terminals.length > 0) {
		const terminal: vscode.Terminal = vscode.window.terminals[0];
		terminal.sendText(command);
		terminal.show();
	} else {
		const terminal: vscode.Terminal = vscode.window.createTerminal(command);
		terminal.sendText(command);
		terminal.show();
	}
}

/**
 * Activates the extension and registers commands for running the `commiter`, `cgcli`, and `commiter_gui` tools.
 * @param context The extension context.
 */
export function activate(context: vscode.ExtensionContext) {
	let disposable_commiter = vscode.commands.registerCommand('commiter-ext.commiter', () => {
		runCommand("commiter");
	});
	context.subscriptions.push(disposable_commiter);

	let disposable_cgcli = vscode.commands.registerCommand('commiter-ext.cgcli', () => {
		runCommand("cgcli");
	});
	context.subscriptions.push(disposable_cgcli);

	let disposable_commiter_gui = vscode.commands.registerCommand('commiter-ext.commiter_gui', () => {
		runCommand("commiter_gui .");
	});
	context.subscriptions.push(disposable_commiter_gui);
}

/**
 * Deactivates the extension.
 */
export function deactivate() { }