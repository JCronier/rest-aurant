// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Components
import App from './App';

// Context API
import ViewProvider from "./providers/ViewProvider";

//Stripe API
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//stripe public key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);


const options = {
  // passing the client secret obtained from the server
  clientSecret: `${process.env.REACT_APP_STRIPE_SECRET}` 
};

// console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  
  <Provider store={store}>
    <ViewProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </ViewProvider>
  </Provider>,
  document.getElementById('root')
);