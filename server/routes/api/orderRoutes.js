const express = require("express");
const router = express.Router();
const ApiOrderController = require("../../controllers/api/orderController");
const authenticateToken = require("../../middleware/authMiddleware");

router.post("/create", authenticateToken, ApiOrderController.create);
router.get("/", ApiOrderController.index);
router.get("/:id", ApiOrderController.show);
router.put("/:id", authenticateToken, ApiOrderController.update);
router.delete("/:id", authenticateToken, ApiOrderController.delete);

module.exports = router;
