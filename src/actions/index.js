import io from 'socket.io-client';
import $ from 'jquery';

// Will be changed once the production server is set up.
// const API_URL = SERVER_ENDPOINTS.DEV;
const API_URL = 'http://localhost:9090';
let socket,
  theGameId;

export const ActionTypes = {
  GET_ROOM_ID: 'GET_ROOM_ID',
};

export const beginNewGame = async (res) => {
  console.log(res, 'begin new game');
  $('#start-game').text('Game is starting soon!');
};

export const newGameCreated = async (res) => {
  theGameId = res.gameId;
  $('#room-id').text(`room id: ${res.gameId}`);
};

export const playerJoinedGame = async (res) => {
  console.log(res);
  $('#players').append(`<div id=${res.mySocketId}>player: ${res.name}</div>`);
};

export const hostCheckAnswer = async (res) => {

};

export const newQuestion = async (res) => {

};

export const playerJoinedRoom = async (res) => {

};

const setListeners = (sock) => {
  sock.on('newGameCreated', (res) => { newGameCreated(res); });
  sock.on('beginNewGame', (res) => { console.log('hell'); beginNewGame(res); });
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

export const hostRoomFull = () => {
  socket.emit('hostRoomFull', theGameId);
};

export const hostCountdownFinished = () => {};

export const hostNextRound = () => {};

export const playerJoinGame = (room, name) => {
  socket.emit('playerJoinGame', { gameId: room, name });
};

export const playerAnswer = () => {};

export const playerRestart = () => {};
