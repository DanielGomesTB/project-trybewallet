import { ADD_USER } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
  // account: 0,
  // coin: 'BRL',
  //   login: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: action.payload,
      // account: action.payload,
      // coin: action.payload,
      //   login: !state.login,
    };
  default:
    return state;
  }
}

export default user;
