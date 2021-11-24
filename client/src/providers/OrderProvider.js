import { createContext, useState } from 'react';

export const orderContext = createContext();

export default function OrderProvider(props) {

  // state.item - Identifier for an item.
  //
  // state.order - An array of objects with the structure
  //               {
  //                 item_id: '619b0ae6f5d42f8e3d159cc0',
  //                 optionValues: [
  //                                 'Exclude - Peanuts',
  //                                 'Exclude - Tomato',
  //                                 'I am allergic to peanuts so please make sure you ACTUALLY do not put any! Thank you!'
  //                               ]
  //               }
  //
  // state.table -  Identifer for a table.
  //
  // Note: The values for state.order and state.table are used in
  //       creating a new Order record.
  const [state, setState] = useState({
    item: null,
    order: [],
    table: null
  });

  // Helper function for specifically modifying:
  //   state.item
  const setItem = (item) => {
    setState({ ...state, item })
  };

  // Helper function for specifically modifying:
  //   state.order
  const addItemToOrder = (item, options) => {
    const newItem = {
      item_id: item,
      optionValues: options
    };

    setState((prev) => ({ ...prev, order: [...prev.order, newItem] }));
  };

  // Helper function for specifically modifying:
  //  state.table
  const setTable = (table) => {
    setState({ ...state, table });
  };

  // Helper function for resetting state.item
  // after the item in focus has been added to cart
  // and view is returned to the menu.
  const resetItem = () => {
    setState({ ...state, item: null });
  };

  // Helper function for resetting state.order
  // after the cart has been ordered and view
  // is sent to PayView.
  const resetOrder = () => {
    setState({ ...state, order: [] });
  };

  const data = { state, setItem, addItemToOrder, setTable, resetItem, resetOrder };

  return (
    <orderContext.Provider value={data}>
      {props.children}
    </orderContext.Provider>
  );

};