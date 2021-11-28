// React
import React from "react";

// Context API
import { useContext } from 'react';
import OrderProvider, { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";
import CartList from "./CartList.js";

// View States
const PAYBILL = 'PAYBILL';
const MENU = 'MENU';

const OrderedView = () => {

  const { getOrderId } = useContext(orderContext);
  const { changeView } = useContext(viewContext);

  return (
    <div>
      <h1>Order #: {getOrderId()}</h1>
      <h3>Your order is on its way!</h3>
      <CartList />
      <button onClick={() => console.log("ORDER")}>ORDER</button>
      <button onClick={() => changeView(MENU)}>MENU</button>
      <button onClick={() => changeView(PAYBILL)}>PAY BILL</button>
    </div>
  );

};

export default OrderedView;