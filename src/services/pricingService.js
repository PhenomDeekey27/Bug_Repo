function calculateSubtotal(items) {
  return items.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0
  );
}

function calculateDiscount(subtotal, discount) {
  if (!discount) {
    return 0;
  }

  if (discount.type === "percentage") {
    return subtotal * (discount.value / 100);
  }

  if (discount.type === "fixed") {
    return Math.min(discount.value, subtotal);
  }

  return 0;
}

function calculateTotal(subtotal, discountAmount, shippingCost) {
  return subtotal - discountAmount + shippingCost;
}

module.exports = {
  calculateSubtotal,
  calculateDiscount,
  calculateTotal
};