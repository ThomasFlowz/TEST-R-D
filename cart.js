// Panier — calcul total commande
function computeTotal(items) {
  let total = 0
  // BUG 1: condition d'arret <= deborde index, items[items.length] = undefined
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].qty
  }
  return total
}

// BUG 2: variable jamais definie -> ReferenceError
function applyDiscount(total) {
  return total - discountAmount
}

// BUG 3: acces propriete sur null -> TypeError runtime
function getUserCity(user) {
  return user.address.city
}

// BUG 4: await dans fonction non-async -> SyntaxError
function loadCart(id) {
  const data = await fetch("/cart/" + id)
  return data
}

module.exports = { computeTotal, applyDiscount, getUserCity, loadCart }
