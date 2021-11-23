// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { getItems } from './actions/items';

// Components
import Menu from './components/Menu';
import ItemView from './components/ItemView';

// Hooks
import useApplicationData from "./hooks/useApplicationData";

// Global States
const MENU = 'MENU';
const ITEM = 'ITEM';

const App = () => {
  // Keeps track of VIEW
  const [view, setView] = useState(['MENU']);

  // Keeps track of CURRENT ITEM
  const {
    state,
    setItem
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
      {view[view.length - 1] === MENU && <Menu view={view} changeView={changeView} setItem={setItem} />}
      {view[view.length - 1] === ITEM && <ItemView itemId={state} />}
    </div>
  )
};

export default App;
