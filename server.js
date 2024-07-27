constapp = require('express')();
consthttp = require('http').Server(app);
constio = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/chat.js', function (req, res) {
    res.sendFile(__dirname + '/chat.js');
});

io.on('connection', function (socket) {
    socket.on('chatmessage', function (msg) {
        io.emit('chatmessage', msg);
    });
});

http.listen(3000, function () {
    console.log('listeningon*:3000');
});