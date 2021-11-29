import { combineReducers } from 'redux';

import items from './items';
import orders from './orders';
import tables from './tables';
import receipts from './receipts';

export default combineReducers({ items, orders, tables, receipts });