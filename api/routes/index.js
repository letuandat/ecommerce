const userRouter = require("./user");
const authRouter = require("./auth");
const productRouter = require("./product");
const cartRouter = require("./cart");
const orderRouter = require("./order");
const stripeRouter = require("./stripe");

function route(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/products", productRouter);
  app.use("/api/carts", cartRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/stripe", stripeRouter);
}

module.exports = route;
