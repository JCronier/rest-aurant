// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getItems } from './actions/items';
import { getOrders } from './actions/orders';

// Components
import Menu from './components/Menu';
import ItemView from './components/ItemView';
import CartView from './components/CartView';
import OrderedView from './components/OrderedView';
import PayView from './components/PayView';
import Nav from './components/Nav';

// Context API
import OrderProvider from "./providers/OrderProvider"
import { useContext } from 'react';
import { viewContext } from './providers/ViewProvider';
import { getReceipts } from './actions/receipts';

// View States
const MENU = 'MENU';
const ITEM = 'ITEM';
const CART = 'CART';
const ORDERED = 'ORDERED';
const PAYBILL = 'PAYBILL';

const App = () => {
  const { view } = useContext(viewContext);

  // Allows us to dispatch any action to the store by
  // adding an action as an argument.
  const dispatch = useDispatch();

  // As App gets rendered, a dispatch with the getItems() action is sent to the store.
  // As App gets rendered, a dispatch with the getOrders() action is sent to the store.
  //
  // Note: logic for getItems() can be found in client/src/actions/items.js.
  // Note: logic for getOrders() can be found in client/src/actions/orders.js.
  useEffect(() => {
    dispatch(getItems());
    dispatch(getOrders());
    dispatch(getReceipts());
  }, [dispatch])

  // Somehow table gets assigned.
  // For now, assume you scanned table with some identification of 1.
  //
  // Note: Is it better to refer to a table with its ObjectID, id, or qr_code?
  // useEffect(() => {
  //   setTable(1);
  // }, []);

  return (
    <div>
      <div>
        <OrderProvider>
          <Nav />
          {view[view.length - 1] === MENU && <Menu />}
          {view[view.length - 1] === ITEM && <ItemView />}
          {view[view.length - 1] === CART && <CartView />}
          {view[view.length - 1] === ORDERED && <OrderedView />}
          {view[view.length - 1] === PAYBILL && <PayView />}
        </OrderProvider>
      </div>
    </div>
  );

};

export default App;
