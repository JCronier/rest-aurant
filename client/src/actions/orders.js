import * as api from '../api';

// Action Creators
export const getOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();

    console.log(data);

    dispatch({ type: 'ORDERS/FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};