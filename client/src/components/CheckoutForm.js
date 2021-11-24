import React, { useEffect, useState } from "react";
import axios from "axios";

//Stripe API
import {CardElement, CardNumberElement, PaymentElement} from '@stripe/react-stripe-js';
import { useStripe, useElements } from "@stripe/react-stripe-js";



const CheckoutForm = (props) => {

  const stripe = useStripe();
  const elements = useElements();

  const [secret, setSecret] = useState(null);

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
      console.log(payload)
    } else {
      // setError(null);
      // setProcessing(false);
      // setSucceeded(true);
      console.log(payload)
    }
  };


  useEffect(() => {
    axios.get((`paymentintent/?amount=${props.amount}`)).then(
      (res) => {
        setSecret(res.data.clientSecret)
      }
    )
  }, [])
  
  return (
    <form onSubmit={handleSubmit}>
      <CardElement/>
      <button></button>
    </form>
    
  )

}

export default CheckoutForm;