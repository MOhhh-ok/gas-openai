const OpenAI_MODELS = {
    GPT35TURBO: 'gpt-3.5-turbo',
};

class OpenAI {
    secretKey: string;
    model: string = OpenAI_MODELS.GPT35TURBO;
    maxTokens: number = 2000; // max token of answer. question and answer takes 4097 tokens at most.
    temperature: number;

    // constructor
    constructor(params: {
        model?: string,
        maxTokens?: number,
        temperature?: number,
    }) {
        this.secretKey = PropertiesService.getScriptProperties().getProperty('OPENAI_SECRET_KEY') || '';
        if (params.model) this.model = params.model;
        if (params.maxTokens) this.maxTokens = params.maxTokens;
        if (params.temperature) this.temperature = params.temperature;
    }

    // chat
    chat35(messages: string[]) {
        const url = "https://api.openai.com/v1/chat/completions";
        const payload = {
            model: this.model,
            max_tokens: this.maxTokens,
            temperature: this.temperature,
            messages: messages,
        };
        console.log(JSON.stringify(payload, null, 2));

        const options = {
            contentType: "application/json",
            headers: { Authorization: "Bearer " + this.secretKey },
            payload: JSON.stringify(payload),
        };

        const txt = UrlFetchApp.fetch(url, options).getContentText();
        console.log(txt);
        const res = JSON.parse(txt);
        return res.choices[0].message.content;
    }
}

