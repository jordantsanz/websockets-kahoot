import io from 'socket.io-client';
import $ from 'jquery';

// Will be changed once the production server is set up.
// const API_URL = SERVER_ENDPOINTS.DEV;
const API_URL = 'http://localhost:9090';
let socket;

export const ActionTypes = {
  GET_ROOM_ID: 'GET_ROOM_ID',
};

export const beginNewGame = async (res) => {

};

export const newGameCreated = async (res) => {
  $('#room-id').text(`room id: ${res.gameId}`);
};

export const playerJoinedGame = async (res) => {

};

export const hostCheckAnswer = async (res) => {

};

export const newQuestion = async (res) => {

};

export const playerJoinedRoom = async (res) => {

};

const setListeners = (sock) => {
  sock.on('newGameCreated', (res) => { newGameCreated(res); });
  sock.on('beginNewGame', (res) => { beginNewGame(res); });
  sock.on('playerJoinGame', (res) => { playerJoinedGame(res); });
  sock.on('hostCheckAnswer', (res) => { hostCheckAnswer(res); });
  sock.on('newQuestion', (res) => { newQuestion(res); });
  sock.on('playerJoinedRoom', (res) => { playerJoinedRoom(res); });
  sock.on('error', (res) => { console.log(res.message); });
};

export const getRoomId = async () => {
  console.log('scoket');
  socket = io(API_URL);
  setListeners(socket);
  console.log('made');
  socket.connect();
  console.log('connected');
  socket.emit('hostCreateNewGame');
};

export const hostRoomFull = () => {};

export const hostCountdownFinished = () => {};

export const hostNextRound = () => {};

export const playerJoinGame = () => {
  socket.emit('playerJoinGame', { gameId: $('#room').text(), name: $('#name').text() });
};

export const playerAnswer = () => {};

export const playerRestart = () => {};
