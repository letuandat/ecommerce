const express = require("express");
const route = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const cartController = require("../controllers/CartController");

route.post("/", verifyToken, cartController.create);
route.put("/:id", verifyTokenAndAuthorization, cartController.update);
route.delete("/:id", verifyTokenAndAuthorization, cartController.delete);
route.get("/find/:userId", verifyTokenAndAuthorization, cartController.get);
route.get("/", verifyTokenAndAdmin, cartController.getAll);

module.exports = route;
