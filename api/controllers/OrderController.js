const Order = require("../models/Order");

class OrderController {
  //[POST] CREATE
  async create(req, res) {
    const newOrder = new Order(req.body);

    try {
      const saveOrder = newOrder.save();
      res.status(200).json(saveOrder);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //UPDATE
  async update(req, res) {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //DELETE
  async delete(req, res) {
    try {
      await Order.findByIdAndDelete(req.params.id);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET USER ORDERS
  async get(req, res) {
    try {
      const order = await Order.find({ userId: req.params.userId });
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // GET ALL
  async getAll(req, res) {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // GET MONTHLY INCOME
  async income(req, res) {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.setMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );

    try {
      const income = await Order.aggregate([
        {
          $match: {
            createdAt: { $gte: previousMonth },
            ...(productId && {
              products: { $elemMatch: { productId } },
            }),
          },
        },
        {
          $project: {
            month: { $month: "$createAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new OrderController();
