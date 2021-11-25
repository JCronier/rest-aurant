import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { updateTableStatus } from "../api";
import { orderContext } from "../providers/OrderProvider";

//Stripe API
import {CardElement, CardNumberElement, PaymentElement} from '@stripe/react-stripe-js';
import { useStripe, useElements } from "@stripe/react-stripe-js";



const CheckoutForm = (props) => {

  //our order state
  const { state } = useContext(orderContext);

  //Allows the rendering of stripe API elements
  const stripe = useStripe();
  const elements = useElements();

  //Local states for handling payment processing
  //Local state for handling the payment secret
  const [secret, setSecret] = useState(null);
  const [checkoutState, setCheckoutState] = useState('INACTIVE')

  //Request for payment intent from the API
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    // setProcessing(true);
    // 5️⃣ Confirm Card Payment.
    const payload = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      // setError(`Payment failed ${payload.error.message}`);
      // setProcessing(false);
      console.log('error occured: ',payload)
    } else {
      // setError(null);
      // setProcessing(false);
      // setSucceeded(true);
      console.log('succesful payment: ',payload)
      updateTableStatus(state.table, "PAID")
      console.log(`table ${state.table} changed to PAID`)
    }
  };

  // export const updateTableStatus = (id, status) => axios.patch(tables_url + `/${id}`, { status })

  //Request to the server for payment secret
  useEffect(() => {
    axios.get((`paymentintent/?amount=${props.amount}`)).then(
      (res) => {
        setSecret(res.data.clientSecret)
        console.log(secret)
      }
    ).then(
      console.log(secret)
    )
    
  }, [])
  
  return (
    <form onSubmit={handleSubmit}>
      <CardElement/>
      <button>Submit</button>
    </form>
    
  )

}

export default CheckoutForm;