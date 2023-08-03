import * as vscode from 'vscode';

/**
 * Activates the extension and registers the `commiter-ext.commiter` command.
 * This command opens a terminal and runs the `commiter` command.
 * If a terminal already exists, it uses that terminal, otherwise it creates a new one.
 * @param context The extension context.
 */
export function activate(context: vscode.ExtensionContext) {
	/**
	 * Registers the `commiter-ext.commiter` command.
	 * This command opens a terminal and runs the `commiter` command.
	 * If a terminal already exists, it uses that terminal, otherwise it creates a new one.
	 * @param context The extension context.
	 */
	let disposable_commiter = vscode.commands.registerCommand('commiter-ext.commiter', () => {
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
	/**
	 * Registers the `commiter-ext.cgcli` command.
	 * This command opens a terminal and runs the `cgcli` command.
	 * If a terminal already exists, it uses that terminal, otherwise it creates a new one.
	 * @param context The extension context.
	 */
	let disposable_cgcli = vscode.commands.registerCommand('commiter-ext.cgcli', () => {
		if (vscode.window.terminals.length > 0) {
			const terminal: vscode.Terminal = vscode.window.terminals[0];
			terminal.sendText("cgcli");
			terminal.show();
		} else {
			const terminal: vscode.Terminal = vscode.window.createTerminal("cgcli");
			terminal.sendText("cgcli");
			terminal.show();
		}
	});
	/**
	 * Adds the `disposable_commiter` and `disposable_cgcli` commands to the extension context's subscriptions.
	 * @param context The extension context.
	 */
	context.subscriptions.push(disposable_commiter);
	context.subscriptions.push(disposable_cgcli);
}

/**
 * Deactivates the extension.
 */
export function deactivate() { }