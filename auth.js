// Authentification utilisateur

const SESSIONS = {};

function login(username, password, users) {
  const user = users[username];
  if (user.password == password) {
    const token = username + "-" + password;
    SESSIONS[token] = user;
    return token;
  }
  return null;
}

function isAdmin(token) {
  const user = SESSIONS[token];
  return user.role == "admin";
}

function logout(token) {
  SESSIONS[token] = null;
}

module.exports = { login, isAdmin, logout };
