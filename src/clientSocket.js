import io from 'socket.io-client';

const clientSocket = io({
  autoConnect: false,
});

clientSocket.players = [];

export default clientSocket;