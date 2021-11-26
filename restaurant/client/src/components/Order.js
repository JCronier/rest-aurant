// React
import React from 'react';

const Order = ({ order }) => {

  return (
    <div>
      <div>_id: {order._id}</div>
      <div>id: {order.id}</div>
      <div>table: {order.table}</div>
      <div>items: {JSON.stringify(order.items)}</div>
      <div>isPaid: {order.isPaid ? 'true' : 'false'}</div>
      <div>options: {JSON.stringify(order.options)}</div>
      <br />
    </div>
  );

};

export default Order;