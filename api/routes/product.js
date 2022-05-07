const express = require("express");
const route = express.Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const productController = require("../controllers/ProductController");

route.post("/", verifyTokenAndAdmin, productController.create);
route.put("/:id", verifyTokenAndAdmin, productController.update);
route.delete("/:id", verifyTokenAndAdmin, productController.delete);
route.get("/find/:id", productController.get);
route.get("/", productController.getAll);

module.exports = route;
