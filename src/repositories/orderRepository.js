const { orders } = require("../data/orders");

async function findOrderById(id) {
  return orders.find((order) => order.id === id) || null;
}

module.exports = { findOrderById };