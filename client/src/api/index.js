import axios from 'axios';

const ngrokUrl = process.env.REACT_APP_NGROK_URL;
const localhostUrl = "http://localhost:3001";
// Items
const items_url = `${ngrokUrl}/items`;

export const fetchItems = () => axios.get(items_url);

// Orders
const orders_url = `${ngrokUrl}/orders`;

export const fetchOrders = () => axios.get(orders_url);
export const createOrder = (newOrder) => axios.post(orders_url, newOrder);
export const updateOrderPaymentStatus = (id, isPaid) => axios.patch(orders_url + `/status/${id}`, { isPaid })

export const putOrder = (newOrder) => axios.put(orders_url + `/${newOrder.id}`, newOrder);

// Tables
const tables_url = `${ngrokUrl}/tables`;

export const fetchTables = () => axios.get(tables_url);
export const createTable = (newTable) => axios.post(tables_url, newTable);
export const updateTableStatus = (id, status) => axios.patch(tables_url + `/${id}`, { status });

// Receipts
const receipts_url = `${ngrokUrl}/receipts`;

export const fetchReceipts = () => axios.get(receipts_url);
export const createReceipt = (newReceipt) => axios.post(receipts_url, newReceipt);
