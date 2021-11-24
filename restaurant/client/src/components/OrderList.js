// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Components
import Order from './Order';

const OrderList = () => {

  // Retrieve all records of the Order model
  // that is in the orders store.
  const orders = useSelector((state) => state.orders);

  // Generate array of Order components.
  const generateOrders = () => (
    orders.map((order) => (
      <Order key={order._id} order={order} />
    ))
  );

  return (
    <div>
      <div>
        {!orders.length ? "Loading..." : generateOrders()}
      </div>
    </div>
  );

};

export default OrderList;