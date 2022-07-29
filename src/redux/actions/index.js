// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const requestAPI = (payload) => ({
  type: REQUEST_API,
  payload,
});

export const getCurrency = (currency) => ({
  type: GET_CURRENCY,
  currencies: Object.keys(currency),
});

export const fetchAPI = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(getCurrency(data));
  } catch (error) {
    console.error(error);
  }
};
