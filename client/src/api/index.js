import axios from 'axios';

const api_url = process.env.REACT_APP_NGROK_URL

// Items
const items_url = `${api_url}items`;

export const fetchItems = () => axios.get(items_url);

// Orders
const orders_url = `${api_url}orders`;

export const fetchOrders = () => axios.get(orders_url);
export const createOrder = (newOrder) => axios.post(orders_url, newOrder);
export const updateOrderPaymentStatus = (id, isPaid) => axios.patch(orders_url + `/status/${id}`, { isPaid })
export const putOrder = (newOrder) => axios.put(orders_url + `/${newOrder.id}`, newOrder);

// Tables
const tables_url = `${api_url}tables`;

export const fetchTables = () => axios.get(tables_url);
export const createTable = (newTable) => axios.post(tables_url, newTable);
export const updateTableStatus = (id, status) => axios.patch(tables_url + `/${id}`, { status });

// Receipts
const receipts_url = `${api_url}receipts`;

export const fetchReceipts = () => axios.get(receipts_url);
export const createReceipt = (newReceipt) => axios.post(receipts_url, newReceipt);
