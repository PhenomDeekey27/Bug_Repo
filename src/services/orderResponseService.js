const {
  calculateSubtotal,
  calculateDiscount,
  calculateTotal
} = require("./pricingService");
const { calculateShippingCost } = require("./shippingService");

function buildOrderResponse(order) {
  const subtotal = calculateSubtotal(order.items);
  const discount = calculateDiscount(subtotal, order.discount);
  const shippingCost = calculateShippingCost(order.shipping);

  const total = calculateTotal(
    subtotal,
    order.discount,
    shippingCost
  );

  return {
    id: order.id,
    customer: order.customer,
    items: order.items,
    pricing: {
      subtotal,
      discount,
      shipping: shippingCost,
      total
    },
    shipping: order.shipping
  };
}

module.exports = { buildOrderResponse };