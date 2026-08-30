function calculateShippingCost(shipping) {
  if (!shipping) {
    return 0;
  }

  if (shipping.method === "express") {
    return 20;
  }

  return 10;
}

module.exports = { calculateShippingCost };