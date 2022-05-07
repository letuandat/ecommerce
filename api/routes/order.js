const express = require("express");
const route = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const orderController = require("../controllers/OrderController");

route.post("/", verifyToken, orderController.create);
route.put("/:id", verifyTokenAndAdmin, orderController.update);
route.delete("/:id", verifyTokenAndAdmin, orderController.delete);
route.get("/find/:userId", verifyTokenAndAuthorization, orderController.get);
route.get("/", verifyTokenAndAdmin, orderController.getAll);
route.get("/income", verifyTokenAndAdmin, orderController.income);

module.exports = route;
