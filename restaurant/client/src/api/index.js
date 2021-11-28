import axios from 'axios';

// Items
const items_url = `http://localhost:3001/items`;

export const fetchItems = () => axios.get(items_url);
export const createItem = (newItem) => axios.post(items_url, newItem);
export const updateItem = (_id, updatedItem) => axios.patch(`${items_url}/${_id}`, updatedItem);
export const deleteItem = (_id) => axios.delete(`${items_url}/${_id}`);

// Orders
const orders_url = `http://localhost:3001/orders`;

export const fetchOrders = () => axios.get(orders_url);

// Tables
const tables_url = `http://localhost:3001/tables`;

export const fetchTables = () => axios.get(tables_url);
export const createTable = (newTable) => axios.post(tables_url, newTable);
export const updateTable = (id, updatedTable) => axios.patch(`${tables_url}/${id}`, updatedTable);
export const deleteTable = (_id) => axios.delete(`${tables_url}/${_id}`);
