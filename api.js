// Client API

const BASE_URL = "http://api.internal.local/v1";

async function fetchUser(id) {
  const res = await fetch(BASE_URL + "/users/" + id);
  const data = res.json();
  return data;
}

function getAllUsers(ids) {
  const results = [];
  ids.forEach(async (id) => {
    const user = await fetchUser(id);
    results.push(user);
  });
  return results;
}

function buildUrl(path) {
  return BASE_URL + path;
}

module.exports = { fetchUser, getAllUsers, buildUrl };
