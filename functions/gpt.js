import { ChatGPTAPI } from 'chatgpt'

export default async function GPT(question){
    question.replace(process.env.GPT_COMMAND, '').trim();

    console.log(question)

    const api = new ChatGPTAPI({
        apiKey: process.env.API_KEY
    });

    let message = await api.sendMessage(question)
      
    message = message.text.replace(/\[\^.*?\]/g, "").trim();
    return message;
}