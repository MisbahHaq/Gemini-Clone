// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
} from '@google/genai';

async function runChat(prompt) {
    try {
        const ai = new GoogleGenAI({
            apiKey: 'AIzaSyC142wlUZFXIxU5K8F3kKwYsw_1hbdyOO8',
        });
        const tools = [
            {
                googleSearch: {
                }
            },
        ];
        const config = {
            thinkingConfig: {
                thinkingLevel: 'HIGH',
            },
            tools,
        };
        const model = 'gemini-2.0-flash-exp';
        const contents = [
            {
                role: 'user',
                parts: [
                    {
                        text: prompt,
                    },
                ],
            },
        ];

        const response = await ai.models.generateContentStream({
            model,
            config,
            contents,
        });
        let fileIndex = 0;
        for await (const chunk of response) {
            if (chunk.text) {
                console.log(chunk.text);
            }
        }
    } catch (error) {
        console.error('Gemini API error:', error.message);
    }
}

export default runChat;


