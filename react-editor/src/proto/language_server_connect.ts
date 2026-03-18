import type { CompletionRequest, InlineCompletionRequest, CompletionResponse, InlineCompletionResponse } from './language_server_pb';

export interface LanguageServerService {
  completion(request: CompletionRequest): Promise<CompletionResponse>;
  inlineCompletion(request: InlineCompletionRequest): Promise<InlineCompletionResponse>;
}

export function createLanguageServerClient(address: string): LanguageServerService {
  return {
    completion: async (request: CompletionRequest): Promise<CompletionResponse> => {
      const response = await fetch(`${address}/completion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
      return response.json();
    },
    inlineCompletion: async (request: InlineCompletionRequest): Promise<InlineCompletionResponse> => {
      const response = await fetch(`${address}/inlineCompletion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
      return response.json();
    },
  };
}
