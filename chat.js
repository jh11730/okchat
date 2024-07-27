varsocket = io();
varmessages = document.getElementById('messages');
varform = document.getElementById('form');
varinput = document.getElementById('input');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chatmessage', input.value);
        input.value = '';
    }
});
socket.on('chatmessage', function (msg) {
    varitem = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
