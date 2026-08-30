const { findOrderById } = require("../repositories/orderRepository");
const { buildOrderResponse } = require("../services/orderResponseService");

async function getOrder(req, res, next) {
  try {
    const order = await findOrderById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    const response = buildOrderResponse(order);
    return res.json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = { getOrder };