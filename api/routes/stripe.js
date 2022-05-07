const express = require("express");
const route = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const stripeController = require("../controllers/StripeController");

route.post("/payment", stripeController.payment);

module.exports = route;
