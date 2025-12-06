import { NextRequest, NextResponse } from 'next/server';
import { chatbotContext } from '@/lib/context';

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error('GEMINI_API_KEY is not set');
            return NextResponse.json(
                { response: "I'm currently unavailable. Please try the contact form instead!" },
                { status: 200 }
            );
        }

        // Construct the prompt with context
        const systemPrompt = `${chatbotContext}

IMPORTANT INSTRUCTIONS:
- Keep responses concise and friendly (2-3 paragraphs max)
- Use emojis sparingly to add personality
- If asked about something not in the context, politely redirect to relevant topics
- Always encourage visitors to check out the projects/dashboards or use the contact form

USER QUESTION: ${message}

Respond as Gervi's helpful AI assistant:`;

        // Call Gemini API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: systemPrompt
                                }
                            ]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500,
                        topP: 0.9,
                        topK: 40
                    },
                    safetySettings: [
                        {
                            category: "HARM_CATEGORY_HARASSMENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_HATE_SPEECH",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        }
                    ]
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Gemini API error status:', response.status);
            console.error('Gemini API error details:', errorData);
            console.error('API Key used (first 10 chars):', apiKey?.substring(0, 10) + '...');
            return NextResponse.json(
                { response: "I'm having a moment! 😅 Please try again or use the contact form to reach Gervi directly." },
                { status: 200 }
            );
        }

        const data = await response.json();

        // Extract the response text
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I couldn't generate a response. Please try asking something else!";

        return NextResponse.json({ response: aiResponse });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { response: "Something went wrong. Please try again later or use the contact form!" },
            { status: 200 }
        );
    }
}
