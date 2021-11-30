// React
import React, { useState } from "react";

// Context API
import { useContext } from 'react';
import OrderProvider, { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";
import CartList from "./CartList/CartList.js";
import { useDispatch, useSelector } from 'react-redux';
import { editOrder } from '../actions/orders';
import { Button } from '@mui/material';

// View States
const PAYBILL = 'PAYBILL';
const MENU = 'MENU';

const OrderedView = () => {
  const { state, getOrderId } = useContext(orderContext);
  const { changeView } = useContext(viewContext);

  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);

  const order = () => {
    // Prepare properties for Order document
    // to be dispatched.

    // 1) id
    const id = getOrderId();

    // 2) table
    const table = state.table;

    // 3) items
    const items = state.order.map((item) => item.item_id);

    // 4) options
    const options = state.order;

    // Construct Order document & dispatch.
    const orderData = { id, table, items, options }
    dispatch(editOrder(orderData));
    // resetOrder();
  };

  const subtotal = state.order.reduce((prev, curr) => {
    return prev + items.find((item) => item._id === curr.item_id).price
  }, 0);

  return (
    <div>
      <h1>Order #: {getOrderId()}</h1>
      <h3>Your order is on its way!</h3>
      <CartList />
      <div style={{position: 'fixed', bottom: '10px', width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <Button
          variant="contained"
          onClick={() => order()}
          sx={{width: '200px'}}
          >
            Place Order Again
        </Button>
        <Button
          variant="contained"
          onClick={() => changeView(PAYBILL)}
          sx={{width: '200px'}}
          >
            Pay Bill $ {subtotal}
        </Button>
      </div>
    </div>
  );

};

export default OrderedView;