import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

//Table status API patch request
import { updateTableStatus } from "../api";
//Order context
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
  // const [checkoutState, setCheckoutState] = useState('INACTIVE')
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  // const [clientSecret, setClientSecret] = useState("");

  const handleChange = async (event) => {
    // 4️⃣ Listen for changes in the CardElement and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
      console.log('error occured: ',payload)
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      console.log('succesful payment: ',payload)
      //uses the built-in API function to send a patch request to our table
      updateTableStatus(state.table, "PAID")
      console.log(`table ${state.table} changed to PAID`)
    }
  };

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
    
  }, [props.amount])

  // const options = 'bluh'
  
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" onChange={handleChange}/>
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">{error}</div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>Payment succeeded!</p>
    </form>
    
  )

}

export default CheckoutForm;