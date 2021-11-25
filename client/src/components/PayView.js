import React from "react";

// Context API
import { useContext, useState } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";

// // Stripe API
// import {loadStripe} from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Components for the Stripe API
import CheckoutForm from "./CheckoutForm";



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
    //Stripe API accepts "smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency)." so we are charging in cents rounded to the nearest cent
    return Math.round(result * 100);
  }

  return (
    <div>
      <h1>Pay your bill</h1>

      Your order:
        {cart}
      Your subtotal:
      {subtotal(state.order)}
        <CheckoutForm amount={subtotal(state.order)}/>
    </div>
  );
};

export default PayView;