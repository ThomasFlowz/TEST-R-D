// Panier d'achat

function computeTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}

function applyTax(total) {
  return total + total * 0.2;
}

function removeItem(items, index) {
  delete items[index];
  return items;
}

function checkout(cart, payment) {
  const total = computeTotal(cart.items);
  payment.charge(total);
}

module.exports = { computeTotal, applyTax, removeItem, checkout };
