//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botข้า]มัu|ก่ = new Discord.Client();

//Set listener on 'ready'
botข้า]มัu|ก่.on('ready', () => {
  console.log('BOT ONLINE!');
});

//Set listener on 'message'
botข้า]มัu|ก่.on('message', message => {
  if (message.content === '-') {
    message.reply('-----');
  }
});

botข้า]มัu|ก่.login('YOUR BOT TOKEN HERE!!!');
