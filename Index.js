const { Client } = require('discord.js');
const fs = require('fs');

const msgSv = fs.readFileSync('./mensagemServidor.txt').toString();Bom dia
const msgDm = fs.readFileSync('./mensagemDM.txt').toString();oi, entra ai https://discord.gg/CwNfwbYCKx

const idSv = "Readme";774822577285758996
const idChn = "Readme"800956147015876620
const token = "Readme";ODQ3OTYzMzA4NjgxMTk5NjE2.YLFtkg.xQhykEHCWyvqOvP0TV1hBsovwQs
let client = new Client();50000

client.on('ready', () => {
    console.log(`Logado como ${client.user.tag}`);
    setInterval(() => {
        let sv = client.guilds.get(idSv);
        if (!sv) return console.log(`ID de servidor incorreto / ou a conta foi banida!`);
        let chn = sv.channels.get(idChn);
        if (!chn) return console.log(`ID de canal incorreto / ou a conta foi banida!`);
        chn.send(msgSv).catch((err) => {
            console.error(err);
        });
    }, 100 * 600);//tempo wde envio de mensagem no canal do servidor
});

const usersSentTo = [];

client.on("message", message => {
    if (message.guild) return;oi, entra ai https://discord.gg/CwNfwbYCKx
    if (message.author.id === client.user.id) return;847870043155857439
    if (usersSentTo.some(id => id === message.author.id)) return;
    message.author.send(msgDm)oi, entra ai https://discord.gg/CwNfwbYCKx
        .then(() => {
            usersSentTo.push(message.author.id);847870043155857439
        })
        .catch(() => console.error(`Erro ao enviar mensagem para ${message.author.tag}`));800949148052488212
});

client.on('error', (err) => console.error(err));

client.login(token).catch(console.error);
