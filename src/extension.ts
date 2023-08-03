// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "commiter-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('commiter-ext.commiter', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		const terminal = vscode.window.createTerminal("Commiter Terminal");
		terminal.sendText("commiter");
		terminal.show();

		// exec('commiter', { cwd: vscode.workspace.rootPath },
		// 	(err: any, stdout: any, stderr: any) => {
		// 		if (err) {
		// 			console.log(err);
		// 			vscode.window.showInformationMessage(err.message);
		// 			return;
		// 		}
		// 		console.log(stdout);
		// 		vscode.window.showInformationMessage(stdout);
		// 	});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
