import { Client } from 'discord.js-selfbot-v13';
import BING from './functions/bing.js';
import GPT from './functions/gpt.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    checkUpdate: false
});

client.on('ready', () => {
    console.log(`${client.user.tag} is ready!`);
});

client.on('messageCreate', async (message) => {
    const messageContent = message.content.toLowerCase();
    console.log(process.env.GPT_COMMAND)

    if (messageContent.startsWith(process.env.GPT_COMMAND)) {
        console.log('ss')
        if (message.author.id === '1034594784024727572') return message.reply('woeshoems mogen dit commando niet gebruiken')
        try {
            const answerGPT = await GPT(messageContent);
            message.reply(answerGPT);
        } catch (error) {
            console.error('GPT error:', error);
            message.reply('Oops! Something went wrong. Please try again later.');
        }

    }


});

client.login(process.env.TOKEN);