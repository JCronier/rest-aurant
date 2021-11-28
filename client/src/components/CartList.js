import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useContext } from "react";

import OrderProvider, { orderContext } from "../providers/OrderProvider";

const CartList = () => {
  const { state, getOrderId, removeItemFromOrder } = useContext(orderContext);
  const items = useSelector((state) => state.items);

  // Retrieve all records of the Order model
  // that is in the orders store.
  //
  // Note: Primarily used to assign sequential id to an Order document.
  const orders = useSelector((state) => state.orders);

  // Allows us to dispatch any action to the store by
  // adding an action as an argument.
  const dispatch = useDispatch();

  const cart = state.order.map((cartItem, index) => {
    return (
      <div>
        <div>
          {items.find((item) => item._id === cartItem.item_id).name}
        </div>
        <ul>
          {cartItem.optionValues.map((optionValue) => <li>{optionValue}<br /></li>)}
          {getOrderId() && <button onClick={() => console.log(index)}>Order Again</button>}
          <button onClick={() => removeItemFromOrder(index)}>Remove</button>
        </ul>
      </div>
    )
  });

  return (
    <div>
      {cart}
    </div>
  );
};

export default CartList;