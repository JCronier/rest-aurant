import * as api from '../api';

//Action Creators
export const getReceipts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReceipts();

    dispatch({ type: 'RECEIPTS/FETCH_ALL', payload: data})
  } catch (error) {
    console.log(error.message)
  }
};

export const createReceipt = (newReceipt) => async (dispatch) => {
  try {
    const { data } = await api.createReceipt(newReceipt);

    console.log(data)

    dispatch ({ type: 'RECEIPTS/CREATE', payload: data});
  } catch (error) {
    console.log(error.message)
  }
};