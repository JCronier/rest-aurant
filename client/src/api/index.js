import axios from 'axios';

// Items
const items_url = 'http://localhost:3000/items';

export const fetchItems = () => axios.get(items_url);

// Orders
const orders_url = 'http://localhost:3000/orders';

export const fetchOrders = () => axios.get(orders_url);

// Tables
const tables_url = 'http://localhost:3000/tables';

export const fetchTables = () => axios.get(tables_url);