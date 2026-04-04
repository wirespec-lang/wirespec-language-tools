import * as vscode from 'vscode';
import { workspace, ExtensionContext } from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from 'vscode-languageclient/node';

let client: LanguageClient | undefined;

export function activate(context: ExtensionContext) {
  const config = workspace.getConfiguration('wirespec.lsp');
  const serverPath = config.get<string>('serverPath', 'wirespec-lsp');

  const serverOptions: ServerOptions = {
    run: { command: serverPath },
    debug: { command: serverPath },
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'wirespec' }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher('**/*.wspec'),
    },
  };

  client = new LanguageClient(
    'wirespec-lsp',
    'wirespec Language Server',
    serverOptions,
    clientOptions
  );

  client.start().catch((err: Error) => {
    vscode.window.showWarningMessage(
      `wirespec-lsp failed to start: ${err.message}. Install with: cargo install --path <wirespec>/crates/wirespec-lsp`
    );
  });
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
