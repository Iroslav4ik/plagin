import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Регистрация команды
    let disposable = vscode.commands.registerCommand('extension.uppercaseSelection', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);

            // Преобразуем текст в верхний регистр
            const upperText = text.toUpperCase();

            // Заменяем выделенный текст
            editor.edit(editBuilder => {
                editBuilder.replace(selection, upperText);
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}