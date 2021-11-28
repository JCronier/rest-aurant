import * as api from '../api';
import qrCode from '../api/qrCode.js'

// Action Creators
export const getTables = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTables();

    console.log(data);

    dispatch({ type: 'TABLES/FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTable = (id) => async (dispatch) => {
  const newTable = {
    id,
    qrCodeUrl: ""
  };

  try {
    newTable.qrCodeUrl += await qrCode(id);
    const { data } = await api.createTable(newTable);

    dispatch({ type: 'TABLES/CREATE', payload: data });
  } catch (error) {
    return error;
  }
};

export const updateTable = (id, updatedTable) => async (dispatch) => {
  try {
    const { data } = await api.updateTable(id, updatedTable);

    dispatch({ type: 'TABLES/UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTable = (_id) => async (dispatch) => {
  try {
    await api.deleteTable(_id);

    dispatch({ type: 'TABLES/DELETE', payload: _id });
  } catch (error) {
    console.log(error.message);
  }
};