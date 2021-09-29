import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { getRoomId, hostRoomFull, playerJoinGame } from '../actions';

const app = () => {
  const { roomId } = useSelector((state) => state);
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div>
      <div> hello
      </div>
      <button type="button" onClick={() => { getRoomId(); }}>Get room id</button>
      <div id="room-id">Room id: {roomId} </div>
      <input id="name" placeholder="name" onChange={(e) => { setName(e.target.value); }} />
      <input id="room" placeholder="room" onChange={(e) => { setRoom(e.target.value); }} />
      <button type="button" onClick={() => { playerJoinGame(room, name); }}>join room</button>
      <div id="players">
        <div id="player" />
      </div>
      <button type="button" onClick={() => { hostRoomFull(roomId); }}>Start game</button>
      <div id="start-game" />
    </div>
  );
};

export default connect(getRoomId)(app);
