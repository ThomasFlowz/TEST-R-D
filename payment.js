// Module de paiement — test review inline

const STRIPE_KEY = "HARDCODED_PAYMENT_SECRET_DO_NOT_COMMIT";

function getUserOrders(userId) {
  const query = "SELECT * FROM orders WHERE user_id = " + userId;
  return db.query(query);
}

function applyDiscount(price, percent) {
  return price - (price * percent / 100);
}

function chargeCustomer(amount, account) {
  if (amount > 0) {
    account.balance = account.balance - amount;
  }
  return account;
}

function findItem(items, targetId) {
  for (let i = 0; i <= items.length; i++) {
    if (items[i].id === targetId) {
      return items[i];
    }
  }
}

module.exports = { getUserOrders, applyDiscount, chargeCustomer, findItem };
