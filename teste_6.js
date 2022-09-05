const qrcode = require('qrcode-terminal');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const { Client } = require('whatsapp-web.js');
//const client = new Client();

const client = new Client({
  puppeteer: { headless: true ,args: ['--no-sandbox','--disable-setuid-sandbox']}
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});

});
//55629172073@c.us

client.on('ready', () => {
    console.log('Client is ready!');
    console.log('Client is ready!');
    client.sendMessage("556291720735@c.us", "sem o nove 1!");
    client.sendMessage("5562991720735@c.us", "com o nove!");
});

app.get('/api/whatsapp', function(req, res) {
    const numero =  req.query.numero+'@c.us';
    const texto = req.query.texto;
    res.send({
        'numero': numero,
        'texto': texto
      });
    /*
    const user_id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
   */
    client.sendMessage(numero, texto);
    console.log('foi!');

  });
  

  console.log('Server started at http://localhost:' + port);

client.initialize();
app.listen(port);
