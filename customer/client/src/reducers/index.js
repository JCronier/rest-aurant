import { combineReducers } from 'redux';

import items from './items';
import orders from './orders';
import tables from './tables';

export default combineReducers({ items, orders, tables });