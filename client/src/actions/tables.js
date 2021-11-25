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


export const createTable = async (id) => {
  const newTable = {
    id,
    qrCodeUrl: ""
  };

  try {
    newTable.qrCodeUrl += await qrCode(id);
    const { data } = await api.createTable(newTable);

    console.log(data);

    return await data;

    // dispatch({ type: 'ORDERS/CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStatus = async (id, status) => {
  try {
    const message = await api.updateTableStatus(id, status);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  }
};