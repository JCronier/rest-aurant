// React
import React from "react";

// Context API
import { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";

// View States
const PAYBILL = 'PAYBILL';

const OrderedView = () => {

  const { } = useContext(orderContext);
  const { changeView } = useContext(viewContext);

  return (
    <div>
      <h1>Your order is on its way!</h1>
      <button onClick={() => changeView(PAYBILL)}>PAY BILL</button>
    </div>
  );

};

export default OrderedView;