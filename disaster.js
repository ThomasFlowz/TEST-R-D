const SECRET_KEY = "sk-prod-abc123supersecret";
const DB_PASS = "admin";

// XSS
app.get("/search", (req, res) => {
  res.send("<h1>" + req.query.q + "</h1>");
});

// Injection SQL directe
function login(username, password) {
  const sql = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  return db.query(sql);
}

// Mot de passe en clair dans les logs
function createUser(email, password) {
  console.log("Creating user:", email, password);
  return db.insert({ email, password }); // mot de passe non hashé
}

// Fuite de mémoire : event listener jamais retiré
function startPolling(emitter) {
  setInterval(() => {
    emitter.on("data", (d) => process(d));
  }, 1000);
}

// Off-by-one + crash garanti
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i].value; // TypeError quand i === arr.length
  }
  return total;
}

// Race condition : pas d'await
async function transferMoney(from, to, amount) {
  const balance = await getBalance(from);
  if (balance >= amount) {
    updateBalance(from, balance - amount); // manque await
    updateBalance(to, balance + amount);   // manque await
  }
}

// Credentials AWS hardcodés
const AWS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

module.exports = { login, createUser, sumArray, transferMoney };
