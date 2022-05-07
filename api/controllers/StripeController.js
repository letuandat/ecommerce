class StripeController {
  //[POST] http://localhost:5000/api/stripe/payment
  payment(res, req) {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  }
}

module.exports = new StripeController();
