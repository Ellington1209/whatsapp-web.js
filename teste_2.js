const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
   
     // Number where you want to send the message.
    const number = "+5562991720735";
   
     // Your message.
    const text = "Hey john";
   
     // Getting chatId from the number.
     // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number.substring(1) + "@c.us";
   
    // Sending message.
    client.sendMessage(chatId, text);
   });

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();