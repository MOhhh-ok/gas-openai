"use strict";
class OpenAi {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    completions(params) {
        const { messages, model } = params;
        const url = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.apiKey,
        };
        const body = {
            model,
            messages,
        };
        const response = UrlFetchApp.fetch(url, {
            method: 'post',
            headers: headers,
            payload: JSON.stringify(body),
        });
        const result = JSON.parse(response.getContentText());
        return result;
    }
} //



// *** typescript *** //

// type OpenAiModel = 'gpt-3.5-turbo' | 'gpt-4';
// type OpenAiMessage = { role: 'user' | 'assistant'; content: string };
// type OpenAiResponse = { choices: [{ message: { content: string } }] };
// 
// class OpenAi {
//     constructor(private apiKey: string) {}
// 
//     completions(params: {
//         messages: OpenAiMessage[];
//         model: OpenAiModel;
//     }): OpenAiResponse {
//         const { messages, model } = params;
//         const url = 'https://api.openai.com/v1/chat/completions';
//         const headers = {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer ' + this.apiKey,
//         };
//         const body = {
//             model,
//             messages,
//         };
//         const response = UrlFetchApp.fetch(url, {
//             method: 'post',
//             headers: headers,
//             payload: JSON.stringify(body),
//         });
//         const result = JSON.parse(response.getContentText());
//         return result;
//     }
// }
// 
