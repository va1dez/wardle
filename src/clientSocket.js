import io from 'socket.io-client';

const clientSocket = io('http://localhost:3000', {
  autoConnect: false,
});

clientSocket.players = [];

export default clientSocket;