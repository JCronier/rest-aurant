import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config()

const stripe = Stripe(process.env.STRIPE_SECRET)
// const stripe = require("stripe")(process.env.STRIPE_SECRET);
console.log(process.env.STRIPE_SECRET)
// Create new Express Router.
const router = express.Router();

router.get('/', async (req, res) => {

  const bill = parseInt(req.query.amount)
  console.log(bill)
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: bill, // Specify amount here
    currency: "usd" // Specify currency here
  })
  // Return client secret
  res.send({
    clientSecret: paymentIntent.client_secret
  });
})


export default router;