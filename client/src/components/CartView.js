// React
import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../actions/orders';

// View States
const MENU = 'MENU';
const ORDERED = 'ORDERED';

const CartView = ({ state, changeView, resetOrder }) => {

  // Retrieve all records of the Item model
  // that is in the items store.
  const items = useSelector((state) => state.items);

  // Retrieve all records of the Order model
  // that is in the orders store.
  //
  // Note: Primarily used to assign sequential id to an Order document.
  const orders = useSelector((state) => state.orders);

  // Allows us to dispatch any action to the store by
  // adding an action as an argument.
  //
  // Note: you don't have to assign the return of useDispatch() to a variable,
  //       but you would be typing useDispatch(<any_action>) every time you want
  //       to dispatch <any_action> to the store.
  const dispatch = useDispatch();

  // Populate cart with html structure representing
  // each item added to the cart with corresponding
  // chosen options.
  const cart = state.order.map((cartItem) => {
    return (
      <div>
        <div>
          {items.find((item) => item._id === cartItem.item_id).name}
        </div>
        <ul>
          {cartItem.optionValues.map((optionValue) => <li>{optionValue}<br /></li>)}
        </ul>
      </div>
    )
  });

  // Changes view state to ORDERED and dispatches
  // an action to create a new order to the database.
  const order = () => {
    // Prepare properties for Order document
    // to be dispatched.

    // 1) id
    const id = orders.length + 1;

    // 2) table
    const table = state.table;

    // 3) items
    const items = state.order.map((item) => item.item_id);

    // 4) options
    const options = state.order;

    // Construct Order document & dispatch.
    const orderData = { id, table, items, options }
    dispatch(createOrder(orderData));

    // resetOrder();

    changeView(ORDERED);
  };

  return (
    <div>
      <div>
        {cart}
      </div>
      <div>
        <button onClick={() => changeView(MENU)}>MENU</button>
      </div>
      <br />
      {/* makes a post request utilizing our current state to the orders document */}
      <div>
        <button onClick={() => order()}>
          ORDER
        </button>
      </div>
    </div>
  );

}

export default CartView;