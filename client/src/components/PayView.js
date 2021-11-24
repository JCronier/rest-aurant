import React from "react";

// Context API
import { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";

// // Stripe API
// import {loadStripe} from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Components
import CheckoutForm from "./CheckoutForm";
import { CardElement } from "@stripe/react-stripe-js";




const PayView = () => {

  const { state } = useContext(orderContext);
  // const {  } = useContext(viewContext);


  //database pull
  const items = useSelector((state) => state.items);

  const cart = state.order.map((cartItem) => {
    const itemObj = items.find((item) => item._id ===  cartItem.item_id)

    return (
      <div key={cartItem.item_id}>
        {itemObj.name} || {itemObj.price}
      </div>
    )
  })

  const subtotal = (orderState) => {
    let result = 0;
    orderState.forEach(cartItem => {
      result += items.find((item) => item._id ===  cartItem.item_id).price
    });
    return result;
  }

  return (
    <div>
      <h1>Pay your bill</h1>

      test: {process.env.REACT_APP_TEST}

      Your order:
        {cart}
      Your subtotal:
      {subtotal(state.order)}
        <CheckoutForm amount={subtotal(state.order)}/>
    </div>
  );
};

export default PayView;