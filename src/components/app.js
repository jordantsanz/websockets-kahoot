import React from 'react';
import { useSelector, connect } from 'react-redux';
import { getRoomId, playerJoinGame } from '../actions';

const app = () => {
  const { roomId } = useSelector((state) => state);
  return (
    <div>
      <div> hello
      </div>
      <button type="button" onClick={() => { getRoomId(); }}>Get room id</button>
      <div id="room-id">Room id: {roomId} </div>
      <input id="name" placeholder="name" />
      <input id="room" placeholder="room" />
      <button type="button" onClick={() => { playerJoinGame(); }}>join room</button>
    </div>
  );
};

export default connect(getRoomId)(app);
