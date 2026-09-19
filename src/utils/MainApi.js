export function loginUser({ email, password }) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({ token: "demo-token", email, password });
    }, 300);
  });
}

export function registerUser({ name, email, password }) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({ name, email, password });
    }, 300);
  });
}

export function checkToken() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({ name: "Demo User", email: "demo@example.com" });
    }, 300);
  });
}

export function saveRecipe(recipe) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(recipe);
    }, 300);
  });
}

export function deleteRecipe(recipeId) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({ recipeId });
    }, 300);
  });
}
