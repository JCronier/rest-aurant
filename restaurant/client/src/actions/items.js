import * as api from '../api';

// Action Creators
export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: 'ITEMS/FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};