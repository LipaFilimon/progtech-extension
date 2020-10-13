// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "htmltemplate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('htmltemplate.createTemplate', function () {
		const htmlContent = `<!DOCTYPE HTML>
		<html lang="ru">
		  <head>
			<meta charset="UTF-8">
			<title>Название страницы</title>
			<meta name="description" content="Описание страницы" />
			
			<link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
			<link rel="icon" href="/img/favicon.png">
			<script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
			
		  </head>
		  <body>
			<header>
			  Шапка
			  <nav>
				Навигация
			  </nav>
			</header>
			<main>
			  <section>
				<h1>Заголовок страницы</h1>
				Основная часть
			  </section>
			</main>
			<aside>
			  Боковая колонка (сайдбар)
			</aside>
			<footer>
			  Подвал
			</footer>
		  </body>
		</html>`;

		const folderPath = vscode.workspace.workspaceFolders[0].uri
			  .toString()
			  .split(":")[1];
			  
		fs.writeFile(path.join(folderPath, "index.html"), htmlContent, err =>{
			if(err){
				console.error(err);
				return vscode.window.showErrorMessage(
					"Failed to create tamplate HTML file"
				)
			}
			vscode.window.showInformationMessage("Created tamplate HTML file")
		})

	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
