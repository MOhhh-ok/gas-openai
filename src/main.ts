function main() {
    const apiKey =
        PropertiesService.getScriptProperties().getProperty('OPENAI_API_KEY');
    if (!apiKey) {
        throw new Error('OPENAI_API_KEY is not set');
    }
    const client = new OpenAi(apiKey);
    const result = client.completions({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hello' }],
    });
    console.log(result);
    console.log(result.choices[0].message.content);
}
