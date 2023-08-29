const { OpenAI, OpenAIApi } = require("openai");

const openai = new OpenAI({
  apiKey: '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',
});


const runPrompt = async () => { 
    const prompt = "give me a short prompt for an image that my penplotter will draw";
    const textResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        max_tokens: 256,
        temperature: 1,
    });

    //console.log(textResponse['choices'][0]['message']['content']);
    generatedPrompt = textResponse['choices'][0]['message']['content']
    console.log(generatedPrompt)


    const imageResponse = await openai.images.generate({
        prompt: generatedPrompt,
        n: 1,
        size: "1024x1024",
    });
    console.log(imageResponse.data[0]['url']);
}




runPrompt();