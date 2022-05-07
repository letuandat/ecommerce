const Product = require("../models/Product");

class ProductController {
  //[POST] CREATE
  async create(req, res) {
    const newProduct = new Product(req.body);

    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //UPDATE
  async update(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //DELETE
  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET PRODUCT
  async get(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET ALl PRODUCT
  async getAll(req, res) {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new ProductController();
