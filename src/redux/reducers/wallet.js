import { GET_CURRENCY, GET_EXCHANGE, REMOVE_EXPENSE } from '../actions';

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
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((element) => (
        Number(element.id) !== Number(action.payload)
      )),
    };
  default:
    return state;
  }
}

export default wallet;
