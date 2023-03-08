
import { BingAIClient } from '@waylaidwanderer/chatgpt-api';

export default async function BING(question){
    question.replace('hey bing', '').trim();

    const bingAIClient = new BingAIClient({
        userToken: '',
    });


    let message = await bingAIClient.sendMessage(question);

    const berichten = message.details.text.replace(/\[\^.*?\]/g, "");

    // message = message.text.replace(/\[\^.*?\]/g, "").trim();
    return berichten;
}


