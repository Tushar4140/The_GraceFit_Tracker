import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const OPEN_AI_CHAT_COMPLETION_MODEL = "gpt-3.5-turbo";

export const getCompletion = async (prompt) => {
  const chatCompletion = await openai.chat.completions.create({
    model: OPEN_AI_CHAT_COMPLETION_MODEL,
    messages: [{"role": "user", "content": prompt}],
    max_tokens: 2000,
    temperature: 0.7,
  });

  return JSON.parse(chatCompletion.choices[0].message.content);
};
