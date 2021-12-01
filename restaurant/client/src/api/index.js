import axios from 'axios';

const api_url = process.env.REACT_APP_NGROK_URL

// Items
const items_url = `${api_url}/items`;

export const fetchItems = () => axios.get(items_url);
export const createItem = (newItem) => axios.post(items_url, newItem);
export const updateItem = (_id, updatedItem) => axios.patch(`${items_url}/${_id}`, updatedItem);
export const deleteItem = (_id) => axios.delete(`${items_url}/${_id}`);

// Orders
const orders_url = `${api_url}/orders`;

export const fetchOrders = () => axios.get(orders_url);

// Tables
const tables_url = `${api_url}/tables`;

export const fetchTables = () => axios.get(tables_url);
export const createTable = (newTable) => axios.post(tables_url, newTable);
export const updateTable = (id, updatedTable) => axios.patch(`${tables_url}/${id}`, updatedTable);
export const deleteTable = (_id) => axios.delete(`${tables_url}/${_id}`);
