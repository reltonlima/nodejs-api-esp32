require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mqttService = require('./services/mqttService');
const lightRoutes = require('./routes/lightRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use('/api/lights', lightRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('control-light', (data) => {
    mqttService.publishMessage(process.env.LIGHT_CONTROL_TOPIC, data);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});