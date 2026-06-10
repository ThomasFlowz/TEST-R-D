// Fichier de test — contient des erreurs volontaires pour tester la review Claude

const API_KEY = "sk-prod-1234567890abcdef"; // 🔴 clé hardcodée

async function fetchUsers(db) {
  const query = `SELECT * FROM users WHERE id = ${db.userId}`; // 🔴 injection SQL
  return db.execute(query);
}

function divide(a, b) {
  return a / b; // 🟡 pas de vérification division par zéro
}

function processItems(items) {
  for (var i = 0; i <= items.length; i++) { // 🔴 off-by-one (<=)
    console.log(items[i].name);
  }
}

const unusedVar = "je sers à rien"; // 🟢 variable inutilisée

module.exports = { fetchUsers, divide, processItems };
