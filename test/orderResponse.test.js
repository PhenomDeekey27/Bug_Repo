const test = require("node:test");
const assert = require("node:assert/strict");
const { buildOrderResponse } = require("../src/services/orderResponseService");

test("calculates an order total with a percentage discount", () => {
  const order = {
    id: "test-1",
    customer: { id: "cus-1", name: "Test User" },
    items: [
      { sku: "A", name: "Item A", quantity: 2, unitPrice: 50 }
    ],
    shipping: { method: "standard", address: { city: "Chennai", country: "IN" } },
    discount: { type: "percentage", value: 10 }
  };

  const result = buildOrderResponse(order);

  assert.equal(result.pricing.subtotal, 100);
  assert.equal(result.pricing.discount, 10);
  assert.equal(result.pricing.shipping, 10);
  assert.equal(result.pricing.total, 127);
});

test("calculates an order total without a discount", () => {
  const order = {
    id: "test-2",
    customer: { id: "cus-2", name: "Test User" },
    items: [
      { sku: "B", name: "Item B", quantity: 1, unitPrice: 100 }
    ],
    shipping: { method: "standard", address: { city: "Chennai", country: "IN" } },
    discount: null
  };

  const result = buildOrderResponse(order);

  assert.equal(result.pricing.subtotal, 100);
  assert.equal(result.pricing.discount, 0);
  assert.equal(result.pricing.shipping, 10);
  assert.equal(result.pricing.total, 110);
});