import axios from 'axios';

// Items
const items_url = `http://localhost:3001/items`;

export const fetchItems = () => axios.get(items_url);

// Orders
const orders_url = 'http://localhost:3001/orders';

export const fetchOrders = () => axios.get(orders_url);
export const createOrder = (newOrder) => axios.post(orders_url, newOrder);

// Tables
const tables_url = 'http://localhost:3001/tables';

export const fetchTables = () => axios.get(tables_url);
export const createTable = (newTable) => axios.post(tables_url, newTable);