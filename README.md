# A Node.js-Based WhatsApp and OpenAI Integration

🚀 Technology Stack:

Node.js (v20.5.0)
WhatsApp Web.js
OpenAI API
🔑 Features:

# WhatsApp Integration:
Real-time QR code generation for easy login.
Automated responses to incoming WhatsApp messages.
Ability to send and receive images and text messages dynamically.
OpenAI Enhanced Interactions:
Integration with OpenAI's API to handle requests and generate content.
Capable of generating images through DALL-E 2 based on text prompts received via WhatsApp.
Uses OpenAI's advanced GPT models to provide text-based answers for queries.
🔧 Core Functionality:

Our system uses dotenv for environment management and node-fetch for HTTP requests.
A special mechanism fetches the latest WhatsApp web version to ensure compatibility.
The script is set to recognize commands prefixed with "#", processes them, and utilizes OpenAI's capability to respond with either an image or a text message, based on the command context.

# 📈 Use Case:
This integration is ideal for automating responses in customer service, providing educational content, or even just for fun interactive bots on WhatsApp that can visualize topics or explain complex information through intuitive AI-generated content.


# Prerequisites
Before you begin, make sure you have Node.js installed on your machine. (v.)

npm install for all dependencies (v20.5.0)

# Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/chatgpt-whatsapp-integration.git
cd chatgpt-whatsapp-integration

# Install Dependencies:
Execute npm install to install all necessary dependencies. Here's a list of main libraries included:

{
  "dotenv": "^16.0.3",
  "express": "^4.19.2",
  "node-fetch": "^3.3.2",
  "openai": "^4.43.0",
  "qrcode-terminal": "^0.12.0",
  "readline": "^1.3.0",
  "whatsapp-web.js": "^1.19.4"
}

# API Key Configuration:
Obtain your OpenAI API Key from OpenAI Platform. Add this key to your .env file to configure the application properly.

You can obtain the Open AI API Key from the following link -> https://platform.openai.com/account/api-keys, Use this Key in the application by confirguring it in the .env file of your application.

# Running the Server

Start the Node server:
bash
Copy code
node index.js


This command runs the server locally and generates a QR code for WhatsApp Web integration. Scan this QR code with your WhatsApp mobile app to start receiving and responding to messages.
Usage:
Users should send messages prefixed with a pound sign # to trigger the GPT model responses. Based on the user's request, the server can provide textual responses or relevant images.

# QR Code Generation

![Screenshot from 2023-02-20 19-35-33](https://user-images.githubusercontent.com/28802910/220241404-5c88da14-ccea-488a-ae10-39ed336e40ed.png)


# Screenshots

Here are some visuals of the integration in action

When user sends a request starting with # (pound sign). chat GPT server will provide the response.

Happy Chat GPT Usage through Whatsapp :D

![chatresponse](https://user-images.githubusercontent.com/28802910/220240860-cd7b1417-20db-424c-86f8-d72977ae706e.jpg)

<img width="838" alt="Screenshot 2024-05-09 at 9 19 27 AM" src="https://github.com/Pradeep241094/chatgpt-whatsapp-integration/assets/28802910/65b00e70-11a1-46b3-bcf7-191bb389a472">

<img width="718" alt="Screenshot 2024-05-09 at 9 19 16 AM" src="https://github.com/Pradeep241094/chatgpt-whatsapp-integration/assets/28802910/e98c87ef-8957-4aef-97e1-d29e16c9b83d">

<img width="394" alt="Screenshot 2024-05-09 at 9 19 06 AM" src="https://github.com/Pradeep241094/chatgpt-whatsapp-integration/assets/28802910/b622d1ba-9022-4aa2-9a72-e3932f05620c">




