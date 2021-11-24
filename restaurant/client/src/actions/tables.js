import * as api from '../api';

// Action Creators
export const getTables = () => async (dispatch) => {
  try {
    const { data } = api.fetchTables();

    dispatch({ type: 'TABLES/FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};