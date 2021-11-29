// React
import React, { useState } from "react";

// Context API
import { useContext } from 'react';
import OrderProvider, { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";
import CartList from "./CartList.js";
import { useDispatch, useSelector } from 'react-redux';
import { editOrder } from '../actions/orders';

// View States
const PAYBILL = 'PAYBILL';
const MENU = 'MENU';

const OrderedView = () => {
  const { state, getOrderId } = useContext(orderContext);
  const { changeView } = useContext(viewContext);

  const dispatch = useDispatch();

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

  return (
    <div>
      <h1>Order #: {getOrderId()}</h1>
      <h3>Your order is on its way!</h3>
      <CartList />
      <button onClick={() => order()}>ORDER</button>
      <button onClick={() => changeView(MENU)}>MENU</button>
      <button onClick={() => changeView(PAYBILL)}>PAY BILL</button>
    </div>
  );

};

export default OrderedView;