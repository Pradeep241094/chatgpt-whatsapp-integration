
// requires nodejs v20.5.0

import dotenv from 'dotenv';
import fetch from 'node-fetch';
import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
import { OpenAI } from 'openai';
const { Client, MessageMedia } = pkg;

dotenv.config();

// Initialize WhatsApp client
const client = new Client({
  webVersionCache: {
    type: "remote",
    remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
});

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

// Event when a message is received
client.on('message', async (message) => {
  console.log('Message received:', message.body);

  if (message.body.startsWith("#")) {
    const result = await runCompletion(message.body.substring(1));
    if (isValidUrl(result)) {
      try {
        const response = await fetch(result);
        const buffer = await response.buffer();
        const media = new MessageMedia('image/jpeg', buffer.toString('base64'));
        client.sendMessage(message.from, media, { caption: 'Here is your image:' });
      } catch (error) {
        console.error('Failed to download or send the image:', error);
        message.reply('Sorry, I could not fetch the image.');
      }
    } else {
      message.reply(result);
    }
  }
});

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
}

async function runCompletion(message) {
  if (message.toLowerCase().includes("image")) {
    try {
      const imageResponse = await openai.images.generate({
        model: "dall-e-2",
        prompt: message,
        n: 1,
        size: "256x256",
      });
      console.log("Image response:", imageResponse.data[0].url);
      return imageResponse.data[0].url;
    } catch (error) {
      console.error("Error generating image:", error);
      return "Failed to generate image.";
    }
  } else {
    console.log("Entering Text response");
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": message }],
        model: "gpt-3.5-turbo",
      });
      console.log('> completion:', completion.choices[0].message.content);
      return completion.choices[0].message.content;
    } catch (error) {
      console.error("Error generating text:", error);
      return "Failed to generate text.";
    }
  }
}

// Initialize the WhatsApp client
client.initialize();
