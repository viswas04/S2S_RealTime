const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: '*' } });

app.use(express.json());

io.on('connection', socket => {
  console.log('Client connected');
  // You’ll add real logic here soon
});

app.get('/', (req, res) => res.send('Server running!'));

http.listen(5000, () => console.log('Backend running on port 5000'));
