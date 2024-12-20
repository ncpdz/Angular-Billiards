// const { Order } = require('../../models');
// const handleError = (res, error) => {
//   console.error(error);
//   res.status(500).json({ error: 'Internal Server Error' });
// };

// class ApiOrderController {
//   static async create(req, res) {
//     try {
//       const { items, totalAmount, customerInfo } = req.body;
//       const userId = req.userId;
//       const newOrder = await Order.create({
//         userId,
//         items,
//         totalAmount,
//         customerInfo,
//         status: 1,
//       });
//       await Cart.destroy({ where: { userId } });
//       res.status(201).json(newOrder);
//     } catch (error) {
//       handleError(res, error);
//     }
//   }

//   static async index(req, res) {
//     try {
//       const orders = await Order.findAll();
//       res.status(200).json(orders);
//     } catch (error) {
//       handleError(res, error);
//     }
//   }

//   static async show(req, res) {
//     try {
//       const order = await Order.findByPk(req.params.id);
//       if (!order) {
//         return res.status(404).json({ error: 'Order not found' });
//       }
//       res.status(200).json(order);
//     } catch (error) {
//       handleError(res, error);
//     }
//   }

//   static async update(req, res) {
//     try {
//       const { status } = req.body;
//       const order = await Order.findByPk(req.params.id);
//       if (!order) {
//         return res.status(404).json({ error: 'Order not found' });
//       }
//       await order.update({ status });
//       res.status(200).json(order);
//     } catch (error) {
//       handleError(res, error);
//     }
//   }

//   static async delete(req, res) {
//     try {
//       const order = await Order.findByPk(req.params.id);
//       if (!order) {
//         return res.status(404).json({ error: 'Order not found' });
//       }
//       await order.destroy();
//       res.status(200).json({ message: 'Order deleted successfully' });
//     } catch (error) {
//       handleError(res, error);
//     }
//   }
// }

// module.exports = ApiOrderController;
// controllers/apiOrderController.js
const { Order, Cart, User } = require("../../models");
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

class ApiOrderController {
  static async create(req, res) {
    try {
      const { items, totalAmount, customerInfo } = req.body;
      const userId = req.userId;
      const newOrder = await Order.create({
        userId,
        items,
        totalAmount,
        customerInfo,
        status: 1,
      });
      await Cart.destroy({ where: { userId } });
      res.status(201).json(newOrder);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async index(req, res) {
    try {
      const orders = await Order.findAll({
        include: [{ model: User, attributes: ["username"] }],
      });
      res.status(200).json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async show(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async update(req, res) {
    try {
      const { items, totalAmount, customerInfo, status } = req.body;
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      await order.update({ items, totalAmount, customerInfo, status });
      res.status(200).json(order);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async delete(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      await order.destroy();
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      handleError(res, error);
    }
  }
}

module.exports = ApiOrderController;
