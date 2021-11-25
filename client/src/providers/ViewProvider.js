import { createContext, useState } from 'react';

export const viewContext = createContext();

// View States
const MENU = 'MENU';
const ITEM = 'ITEM';
const CART = 'CART';
const ORDERED = 'ORDERED';
const PAYBILL = 'PAYBILL';

export default function OrderProvider(props) {

  // Keeps track of what View component must
  // get rendered (e.g., ItemView, CartView, etc.).
  //
  // view is an array of past and current view states (e.g., ['MENU', 'ITEM']).
  const [view, setView] = useState([MENU]);

  // Helper function for specifically modifying:
  //  view
  const changeView = (newView) => {
    setView(prev => [...prev, newView]);
  }

  const data = { view, changeView };

  return (
    <viewContext.Provider value={data}>
      {props.children}
    </viewContext.Provider>
  );

};