const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});

});
//556291720735@c.us

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage("556291720735@c.us", "passou");
});

setTimeout(() => {
    client.sendMessage("556291720735@c.us", "seu bosta funcionou!");
    console.log('timeout');
  }, "60000")


client.on('message', message => {
	if(message.body === '!ping') {
        console.log(message.from);
		client.sendMessage(message.from, 'pong');
	}
});
 

client.initialize();
