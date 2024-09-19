const express = require('express');
const app = express();
const { Server } = require('socket.io');

var server = require('http').createServer(app);
var io = new Server(server);

app.use('/', express.static('public'));

function getHomeLinks() {
    const links = [
        ["Contrôle", "/master.html"],
        ["5 points gagants + points du 4 à la suite", "/5-points.html"],
        ["Themes 4 à la suite", "/themes"],
        ["4 à la suite", "/4-suite.html"],
        ["Jeu décisif - photo 1 (phryge)", "/img/photo1.jpg"],
        ["Jeu décisif - photo 2 (vannerie)", "/img/photo2.jpg"],
        ["Jeu décisif - photo 3 (garbure)", "/img/photo3.jpg"],
        ["Face à face", "/face-face.html"]
    ]

    let a = links.map(value => {
        [label, link] = value;
        return `<li><a href="${link}" target="_blank" >${label}</a></li>`
    })

    let list = a.join('\n');
    return `<meta charset="utf-8" ><ul>${list}</ul>`;
}

io.sockets.on('connection', (socket, pseudo) => {
    socket.onAny((e, ...args) => {
        console.log(`${e} : ${args}`)
        socket.broadcast.emit(e, ...args)
    });
})

server.listen(8081, () => {
    console.log('Serveur sur le port 8081')
});
