import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useContext } from "react";

import OrderProvider, { orderContext } from "../providers/OrderProvider";
import { viewContext } from "../providers/ViewProvider";

const ITEM = 'ITEM';

const CartList = () => {
  const { state, getOrderId, removeItemFromOrder, setItem } = useContext(orderContext);
  const { changeView } = useContext(viewContext);
  const items = useSelector((state) => state.items);

  const viewDetails = (id) => {
    setItem(id);
    changeView(ITEM);
  };

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
          {getOrderId() && <button onClick={() => viewDetails(cartItem.item_id)}>Order Again</button>}
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