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

export const createItem = (newItem) => async (dispatch) => {
  try {
    const { data } = await api.createItem(newItem);

    dispatch({ type: 'ITEMS/CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateItem = (_id, updatedItem) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(_id, updatedItem);

    dispatch({ type: 'ITEMS/UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteItem = (_id) => async (dispatch) => {
  try {
    await api.deleteItem(_id);

    dispatch({ type: 'ITEMS/DELETE', payload: _id });
  } catch (error) {
    console.log(error.message);
  }
};