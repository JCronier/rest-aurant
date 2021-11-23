// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getItems } from './actions/items';

// Components
import Menu from './components/Menu';
import ItemView from './components/ItemView';
import CartView from './components/CartView';
import Ordered from './components/Ordered';

// Hooks
import useApplicationData from "./hooks/useApplicationData";

// Global States
const MENU = 'MENU';
const ITEM = 'ITEM';
const CART = 'CART';
const ORDERED = 'ORDERED';
const PAYBILL = 'PAYBILL';

const App = () => {
  // Keeps track of VIEW
  const [view, setView] = useState(['MENU']);

  // Keeps track of CURRENT ITEM
  const {
    state,
    setItem,
    addItem
  } = useApplicationData();

  const changeView = (newView) => {
    setView(prev => [...prev, newView]);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch])

  return (
    <div>
      <h1>App</h1>
      {view[view.length - 1] === MENU && <Menu view={view} changeView={changeView} setItem={setItem} state={state} />}
      {view[view.length - 1] === ITEM && <ItemView itemId={state} changeView={changeView} addItem={addItem} />}
      {view[view.length - 1] === CART && <CartView state={state} changeView={changeView} />}
      {view[view.length - 1] === ORDERED && <Ordered changeView={changeView} />}
    </div>
  )
};

export default App;
