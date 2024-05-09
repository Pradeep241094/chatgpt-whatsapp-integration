# chatgpt-whatsapp-integration

npm install for all dependencies

Steps to execute:

1. npm install (install the dependencies listed in package.json file

    "dependencies": {
    "dotenv": "^16.0.3",
    "express": "^4.19.2",
    "node-fetch": "^3.3.2",
    "openai": "^4.43.0",
    "qrcode-terminal": "^0.12.0",
    "readline": "^1.3.0",
    "whatsapp-web.js": "^1.19.4"
  }
2. You can obtain the Open AI API Key from the following link -> https://platform.openai.com/account/api-keys, Use this Key in the application by confirguring it in the .env file of your application.


3. To run the node server locally: node index.js (This will generate the QR code for whatsapp web server and upon scanning the QR code, You will be able ti listen to the incoming mesgs from user).

![Screenshot from 2023-02-20 19-35-33](https://user-images.githubusercontent.com/28802910/220241404-5c88da14-ccea-488a-ae10-39ed336e40ed.png)

4. When user sends a request starting with # (pound sign). chat GPT server will provide the response.

Happy Chat GPT Usage through Whatsapp :D

![chatresponse](https://user-images.githubusercontent.com/28802910/220240860-cd7b1417-20db-424c-86f8-d72977ae706e.jpg)

