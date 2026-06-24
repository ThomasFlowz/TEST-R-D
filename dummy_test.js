// Fichier bidon pour tester le workflow GitHub @claude
function add(a, b) {
  return a + b
}

function greet(name) {
  console.log("Bonjour " + name)
}

// bug volontaire: pas de gestion si name undefined
greet()

module.exports = { add, greet }
