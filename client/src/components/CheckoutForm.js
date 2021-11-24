import React from "react";

//Stripe API
import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {

  return (
    <div>
      I am a CheckoutForm
      <form>
        <PaymentElement />
        <button>Submit</button>
      </form>
    </div>
  )

}

export default CheckoutForm;