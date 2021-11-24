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

// Custom Hooks
import useApplicationData from "./hooks/useApplicationData";

// View States
const MENU = 'MENU';
const ITEM = 'ITEM';
const CART = 'CART';
const ORDERED = 'ORDERED';
const PAYBILL = 'PAYBILL';

let params = new URLSearchParams(window.location.search);
let table = params.get('table');

const App = () => {

  // Allows us to dispatch any action to the store by
  // adding an action as an argument.
  //
  // Note: you don't have to assign the return of useDispatch() to a variable,
  //       but you would be typing useDispatch(<any_action>) every time you want
  //       to dispatch <any_action> to the store.
  const dispatch = useDispatch();

  // As App gets rendered, a dispatch with the getItems() action is sent to the store.
  // As App gets rendered, a dispatch with the getOrders() action is sent to the store.
  //
  // Note: logic for getItems() can be found in client/src/actions/items.js.
  // Note: logic for getOrders() can be found in client/src/actions/orders.js.
  useEffect(() => {
    dispatch(getItems());
    dispatch(getOrders());
    console.log("table: ", table)
  }, [dispatch])

  // Keeps track of what View component must
  // get rendered (e.g., ItemView, CartView, etc.).
  //
  // view is an array of past and current view states (e.g., ['MENU', 'ITEM']).
  const [view, setView] = useState([MENU]);

  // See client/src/hooks/useApplicationData.js
  // for detailed purpose of state, setItem, addItemToOrder, and setTable.
  const { state, setItem, addItemToOrder, setTable, resetItem, resetOrder } = useApplicationData();

  // Helper function for specifically modifying:
  //  view
  const changeView = (newView) => {
    setView(prev => [...prev, newView]);
  }

  // Somehow table gets assigned.
  // For now, assume you scanned table with some identification of 1.
  // 
  // Note: Is it better to refer to a table with its ObjectID, id, or qr_code?
  useEffect(() => {
    setTable(table);
  }, []);

  return (
    <div>
      <div>
        <h1>I'THAI'LY</h1>
      </div>
      <div>
        {view[view.length - 1] === MENU && <Menu state={state} changeView={changeView} setItem={setItem} />}
        {view[view.length - 1] === ITEM && <ItemView state={state} changeView={changeView} resetItem={resetItem} addItemToOrder={addItemToOrder} />}
        {view[view.length - 1] === CART && <CartView state={state} changeView={changeView} resetOrder={resetOrder} />}
        {view[view.length - 1] === ORDERED && <OrderedView changeView={changeView} />}
      </div>
    </div>
  );

};

export default App;
