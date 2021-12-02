// React
import React from 'react';
import CartList from "./CartList/CartList.js";

// Context API
import { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from '../providers/ViewProvider';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../actions/orders';
import { Button } from '@mui/material';

// View States
const MENU = 'MENU';
const ORDERED = 'ORDERED';

const CartView = () => {

  const { state, resetOrder, setOrderId } = useContext(orderContext);
  const { changeView } = useContext(viewContext);

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
  const dispatch = useDispatch();

  const subtotal = state.order.reduce((prev, curr) => {
    return prev + (items.find((item) => item._id === curr.item_id).price);
  }, 0.00);

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
    setOrderId(id);
    changeView(ORDERED);
  };

  return (
    <div>
      {state.order.length > 0 ?
       (
        <>
          <h3>Please review your order below</h3>
          <CartList/>
        </>
       )
       : (<h3>Your order is empty!</h3>)}
      <div style={{position: 'fixed', left: 0, bottom: '10px', width: '100%', display: 'flex', justifyContent: 'center'}}>
      {state.order.length > 0 && <Button
          variant="contained"
          onClick={() => order()}
          sx={{width: '100%'}}
          >
            Place Order ${subtotal.toFixed(2)}
        </Button>}
      </div>
    </div>
  );

};

export default CartView;