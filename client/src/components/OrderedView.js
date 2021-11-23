// React
import React from "react";

// View States
const PAYBILL = 'PAYBILL';

const OrderedView = ({ changeView }) => {

  return (
    <div>
      <h1>Your order is on its way!</h1>
      <button onClick={() => changeView(PAYBILL)}>PAY BILL</button>
    </div>
  );

};

export default OrderedView;