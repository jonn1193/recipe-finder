import { MEALDB_BASE_URL } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Error: ${res.status}`));
}

export function searchRecipes(query) {
  return fetch(`${MEALDB_BASE_URL}/search.php?s=${encodeURIComponent(query)}`)
    .then((res) => checkResponse(res))
    .then((data) => data.meals || [])
    .catch((error) => Promise.reject(error));
}
