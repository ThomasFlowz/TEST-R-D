// Test review Claude v2

const DB_PASSWORD = "admin123"; // clé hardcodée

function getUser(id) {
  const sql = `SELECT * FROM users WHERE id = ${id}`; // injection SQL
  return db.query(sql);
}

function total(items) {
  let sum = 0;
  for (var i = 0; i <= items.length; i++) { // off-by-one
    sum += items[i].price;
  }
  return sum;
}

module.exports = { getUser, total };
// trigger v3
