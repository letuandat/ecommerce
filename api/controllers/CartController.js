const Cart = require("../models/Cart");

class CartController {
  //[POST] CREATE
  async create(req, res) {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //UPDATE
  async update(req, res) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //DELETE
  async delete(req, res) {
    try {
      await Cart.findByIdAndDelete(req.params.id);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET USER CART
  async get(req, res) {
    try {
      const cart = await Cart.find({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // GET ALL
  async getAll(req, res) {
    try {
      const cart = await Cart.find();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new CartController();
