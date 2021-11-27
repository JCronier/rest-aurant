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

export const updateStatus = async (id, status) => {
  try {
    const message = await api.updateTableStatus(id, status);
    console.log(message);
    return message;
  } catch (error) {
    console.log(error.message);
  }
};