const orders = [
  {
    id: "ord-1001",
    customer: { id: "cus-1", name: "Asha" },
    items: [
      { sku: "KB-01", name: "Keyboard", quantity: 1, unitPrice: 80 },
      { sku: "MS-02", name: "Mouse", quantity: 2, unitPrice: 25 }
    ],
    shipping: {
      method: "standard",
      address: { city: "Chennai", country: "IN" }
    },
    discount: { type: "percentage", value: 10 }
  },
  {
    id: "ord-1002",
    customer: { id: "cus-2", name: "Ravi" },
    items: [
      { sku: "HD-03", name: "Headphones", quantity: 1, unitPrice: 120 }
    ],
    shipping: {
      method: "express",
      address: { city: "Bengaluru", country: "IN" }
    },
    discount: null
  }
];

module.exports = { orders };