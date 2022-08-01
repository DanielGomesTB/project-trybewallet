import { GET_CURRENCY, GET_EXCHANGE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.currencies,
    };
  case GET_EXCHANGE:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.state,
        id: state.expenses.length,
        exchangeRates: action.data }],
    };
  default:
    return state;
  }
}

export default wallet;
