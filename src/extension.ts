import * as vscode from 'vscode';

/**
 * Runs a command in the VS Code terminal. If a terminal already exists, the command is executed in that terminal.
 * Otherwise, a new terminal is created and the command is executed in that terminal.
 * @param command The command to execute in the terminal.
 */
function runCommand(command: string) {
	if (vscode.window.terminals.length > 0) { // If a terminal already exists, use that terminal
		const terminal: vscode.Terminal = vscode.window.terminals[0];
		terminal.sendText(command);
		terminal.show();
	} else { // Otherwise, create a new terminal
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
		vscode.window.showInputBox({ // Prompt the user for a commit message
			placeHolder: "Enter commit message here",
			prompt: "Commit message"
		}).then((value) => {
			if (value) { // If the user entered a commit message, run the commiter with that commit message
				runCommand(`commiter ${value}`); // Run the commiter tool
			} else { // Otherwise, run the commiter without a commit message
				if (value === undefined) { // If the user canceled the prompt, return
					return;
				}
				runCommand("commiter"); // Run the commiter tool
			}
		});
	});
	context.subscriptions.push(disposable_commiter); // Add the command to the context subscriptions

	let disposable_cgcli = vscode.commands.registerCommand('commiter-ext.cgcli', () => {
		runCommand("cgcli"); // Run the cgcli tool
	});
	context.subscriptions.push(disposable_cgcli); // Add the command to the context subscriptions

	let disposable_commiter_gui = vscode.commands.registerCommand('commiter-ext.commiter_gui', () => {
		runCommand("commiter_gui ."); // Run the commiter_gui tool
	});
	context.subscriptions.push(disposable_commiter_gui); // Add the command to the context subscriptions
}

/**
 * Deactivates the extension.
 */
export function deactivate() { }