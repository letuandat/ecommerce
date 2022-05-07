const express = require("express");
const route = express.Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const userController = require("../controllers/UserController");

route.put("/:id", verifyTokenAndAuthorization, userController.update);
route.delete("/:id", verifyTokenAndAuthorization, userController.delete);
route.get("/find/:id", verifyTokenAndAdmin, userController.get);
route.get("/", verifyTokenAndAdmin, userController.getAll);
route.get("/stats", verifyTokenAndAdmin, userController.stats);

module.exports = route;
