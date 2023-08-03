import * as vscode from 'vscode';

/**
 * Activates the extension and registers the `commiter-ext.commiter` command.
 * This command opens a terminal and runs the `commiter` command.
 * If a terminal already exists, it uses that terminal, otherwise it creates a new one.
 * @param context The extension context.
 */
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('commiter-ext.commiter', () => {
		if (vscode.window.terminals.length > 0) {
			const terminal: vscode.Terminal = vscode.window.terminals[0];
			terminal.sendText("commiter");
			terminal.show();
		} else {
			const terminal: vscode.Terminal = vscode.window.createTerminal("commiter");
			terminal.sendText("commiter");
			terminal.show();
		}
	});
	context.subscriptions.push(disposable);
}

/**
 * Deactivates the extension.
 */
export function deactivate() { }