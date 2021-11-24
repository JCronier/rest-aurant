import React from "react";

// Context API
import { useContext } from 'react';
import { orderContext } from '../providers/OrderProvider';
import { viewContext } from "../providers/ViewProvider";

// Stripe API
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Components
import CheckoutForm from "./CheckoutForm";

//stripe public key
const stripePromise = loadStripe('pk_test_A7jK4iCYHL045qgjjfzAfPxu');



const PayView = ({ }) => {


  const { state } = useContext(orderContext);
  // const {  } = useContext(viewContext);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  //database pull
  const items = useSelector((state) => state.items);

  const cart = state.order.map((cartItem) => {
    const itemObj = items.find((item) => item._id ===  cartItem.item_id)

    return (
      <div>
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
  //   const itemObj = items.find((item) => item._id ===  cartItem.item_id);
  //   const result = result + itemObj.price;
  //   return result;
  // });

  //{items.find((item) => item._id === cartItem.item_id).name}

  return (
    <div>
      <h1>Pay your bill</h1>

      <Elements stripe={stripePromise} options={options}>
        Your order:
        {cart}
        Your subtotal:
        {subtotal(state.order)} 
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PayView;