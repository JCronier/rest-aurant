import axios from 'axios';

// Items
const items_url = `http://localhost:3001/items`;

export const fetchItems = () => axios.get(items_url);

// Orders
const orders_url = 'http://localhost:3001/orders';

export const fetchOrders = () => axios.get(orders_url);
export const createOrder = (newOrder) => axios.post(orders_url, newOrder);
export const updateOrderPaymentStatus = (id, isPaid) => axios.patch(orders_url + `/status/${id}`, { isPaid })


// Tables
const tables_url = 'http://localhost:3001/tables';

export const fetchTables = () => axios.get(tables_url);
export const createTable = (newTable) => axios.post(tables_url, newTable);
export const updateTableStatus = (id, status) => axios.patch(tables_url + `/${id}`, { status });

// Receipts
const receipts_url = 'http://localhost:3001/receipts';

export const fetchReceipts = () => axios.get(receipts_url);
export const createReceipt = (newReceipt) => axios.post(receipts_url, newReceipt);
