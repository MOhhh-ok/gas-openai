## About

This script if for the OpenAI API in Google Apps Script (GAS).

Now implemented only for ChatGPT3.5

## Usage Sample

```
const test = new OpenAI({
    model: OpenAI.MODELS.GPT35TURBO,
    maxTokens: 2000,
    temperature: 0.7,
});

const messages: OpenAI35Message[] = [
    { role: OpenAI.ROLES.SYSTEM, content: "You are a friend of user" },
    { role: OpenAI.ROLES.USER, content: "hello" },
];

const res = test.chat35(messages).choices[0].message.content;
console.log(res);
```