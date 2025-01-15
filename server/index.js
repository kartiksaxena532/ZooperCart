const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8080;

const app = express();
const stripe = require("stripe")(
  "sk_test_51QZWRSKBp1YPyoyvHMr1MGCoJyyRwvUZsV0DsVrYIp3JjjgNfl8MKmkeTBA57nruw20Z4N3oJc2es131vlSj9zs600KRHcZ67x"
);

app.use(cors());

app.use(bodyParser.json());

// An endpoint for your checkout
app.post("/checkout", async (req, res) => {
  try {
    // Create or retrieve the Stripe Customer object associated with your user.
    let customer = await stripe.customers.create(); // This example just creates a new Customer every time

    // Create an ephemeral key for the Customer; this allows the app to display saved payment methods and save new ones
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2020-08-27" }
    );
    // Ensure minimum amount is ₹50
    const amountInPaise = req.body.amount * 100;
    // Create a PaymentIntent with the payment amount, currency, and customer
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInPaise,
      currency: "inr",
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    // Send the object keys to the client
    res.send({
      publishableKey:
        "pk_test_51QZWRSKBp1YPyoyvAmHLwMtFVJs1xVf00nPuEmRxxfBPoofLnhBlVChzMTnACWRQt6ToZs29r0US6A6WHDwqFYhX00HITUhQnU",
      paymentIntent: paymentIntent.client_secret,
      customer: customer.id,
      ephemeralKey: ephemeralKey.secret,
    });
    res.status(200);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
