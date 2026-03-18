export interface CompletionRequest {
  text: string;
  cursorPosition: number;
  filePath: string;
  languageId: string;
}

export interface InlineCompletionRequest {
  text: string;
  cursorPosition: number;
  filePath: string;
  languageId: string;
  selectedCompletionInfo?: {
    text: string;
    range?: { startLineNumber: number; startColumn: number; endLineNumber: number; endColumn: number };
  };
}

export interface CompletionResponse {
  completions: string[];
}

export interface InlineCompletionResponse {
  completions: InlineCompletionItem[];
}

export interface InlineCompletionItem {
  text: string;
  range?: {
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
  };
}
