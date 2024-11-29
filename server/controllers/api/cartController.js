const { Cart, Product } = require("../../models");
const jwt = require("jsonwebtoken");

const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

class ApiCartController {
  static async addToCart(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "your_secret_key");
      const userId = decodedToken.id;

      const { productId, quantity } = req.body;
      let cart = await Cart.findOne({ where: { userId, productId } });

      if (cart) {
        cart.quantity += quantity;
        await cart.save();
      } else {
        await Cart.create({ userId, productId, quantity });
      }

      res.status(201).json({ message: "Item added to cart" });
    } catch (error) {
      handleError(res, error);
    }
  }
  static async getCart(req, res) {
    try {
      const authHeader = req.headers.authorization;
      console.log("Authorization Header:", authHeader);
      if (!authHeader) {
        return res
          .status(401)
          .json({ error: "Authorization header is missing" });
      }
      const token = authHeader.split(" ")[1];
      console.log("Token:", token);
      const decodedToken = jwt.verify(token, "your_secret_key");
      console.log("Decoded Token:", decodedToken);
      const userId = decodedToken.id;
      console.log("User ID:", userId);
      const cart = await Cart.findAll({
        where: { userId },
        include: [Product],
      });
      console.log("Cart Data:", cart);
      if (!cart.length) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.status(200).json(cart);
    } catch (error) {
      console.error("Error in getCart:", error);
      handleError(res, error);
    }
  }

  static async removeFromCart(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "your_secret_key");
      const userId = decodedToken.id;

      const { productId } = req.body;
      const cart = await Cart.findOne({ where: { userId, productId } });

      if (!cart) {
        return res.status(404).json({ error: "Item not found in cart" });
      }

      await cart.destroy();
      res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
      handleError(res, error);
    }
  }
}

module.exports = ApiCartController;
