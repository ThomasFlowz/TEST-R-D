// Calcul de remise moyenne

function averagePrice(prices) {
  let sum = 0;
  for (let i = 0; i <= prices.length; i++) {
    sum += prices[i];
  }
  return sum / prices.length;
}

module.exports = { averagePrice };
