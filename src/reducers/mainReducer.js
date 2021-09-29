import { ActionTypes } from '../actions';

const initialState = {
  roomId: '',
};

const MainReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case ActionTypes.GET_ROOM_ID:
      return { ...state, roomId: payload };
    default:
      return state;
  }
};

export default MainReducer;
