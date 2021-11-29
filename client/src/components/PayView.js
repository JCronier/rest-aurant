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
// import Receipt from "./Receipt";



const PayView = () => {

  const { state } = useContext(orderContext);
  // const {  } = useContext(viewContext);

  const [tipState, setTipState] = useState(0);


  //database pull
  const items = useSelector((state) => state.items);

  //maps the cart 
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

  const tips = (mySubtotal) => {
    const tipArray = [0.15, 0.18, 0.20]

    const tipAmounts = tipArray.map((tipPercent) => {
      return Math.round((mySubtotal) * tipPercent)/100
    })
    // console.log(tipAmounts, mySubtotal)
    return tipAmounts
  }

  const total = Math.round(subtotal(state.order) + tipState)

  return (
    <div>
      <h1>Pay your bill</h1>

      Your order:
        {cart}
      Your subtotal:
      {` $${parseFloat(subtotal(state.order)) / 100} CAD`}
      <div>
        Tip Amount: 
        <button onClick={() => setTipState(tips(subtotal(state.order))[0]*100)} >15%: {tips(subtotal(state.order))[0]}</button>  
        <button  onClick={() => setTipState(tips(subtotal(state.order))[1]*100)} >18%: {tips(subtotal(state.order))[1]}</button>  
        <button  onClick={() => setTipState(tips(subtotal(state.order))[2]*100)}>20%: {tips(subtotal(state.order))[2]}</button> 
        Custom Amount: %<input type="number" min="0" max="100" pattern="^[1-9]\d*$" onChange={(event) =>  event.target.value < 0 ? console.log('invalid number') : setTipState(((event.target.value/100) * subtotal(state.order)))}></input>
      </div>
      Your Total: ${total /100} CAD
        <CheckoutForm amount={total}/>
    </div>
  );
};

export default PayView;