import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SavedRecipes from "./components/SavedRecipes/SavedRecipes";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import { searchRecipes } from "./utils/MealDbApi";
import {
  checkToken,
  deleteRecipe,
  loginUser,
  registerUser,
  saveRecipe,
} from "./utils/MainApi";
import {
  API_ERROR_MESSAGE,
  DEFAULT_SEARCH_QUERY,
  VISIBLE_RECIPE_INCREMENT,
} from "./utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [visibleRecipeCount, setVisibleRecipeCount] = useState(
    VISIBLE_RECIPE_INCREMENT,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasSearched, setHasSearched] = useState(true);

  const savedRecipeIds = savedRecipes.map((recipe) => recipe.idMeal);

  const handleSearch = (query) => {
    const searchQuery = query.trim() || DEFAULT_SEARCH_QUERY;

    setIsLoading(true);
    setErrorMessage("");
    setHasSearched(true);
    setVisibleRecipeCount(VISIBLE_RECIPE_INCREMENT);

    searchRecipes(searchQuery)
      .then((meals) => {
        setRecipes(meals);
      })
      .catch(() => {
        setRecipes([]);
        setErrorMessage(API_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    searchRecipes(DEFAULT_SEARCH_QUERY)
      .then((meals) => {
        setRecipes(meals);
      })
      .catch(() => {
        setRecipes([]);
        setErrorMessage(API_ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("recipe-finder-token");

    if (token) {
      checkToken()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch(() => {
          localStorage.removeItem("recipe-finder-token");
        });
    }
  }, []);

  const handleShowMore = () => {
    setVisibleRecipeCount((currentCount) =>
      Math.min(currentCount + VISIBLE_RECIPE_INCREMENT, recipes.length),
    );
  };

  const handleSaveRecipe = (recipeId) => {
    const isAlreadySaved = savedRecipes.some(
      (recipe) => recipe.idMeal === recipeId,
    );

    if (isAlreadySaved) {
      deleteRecipe(recipeId)
        .then(() => {
          setSavedRecipes((currentRecipes) =>
            currentRecipes.filter((recipe) => recipe.idMeal !== recipeId),
          );
        })
        .catch(() => {});
      return;
    }

    const recipeToSave = recipes.find((recipe) => recipe.idMeal === recipeId);

    if (recipeToSave) {
      saveRecipe(recipeToSave)
        .then((savedRecipe) => {
          setSavedRecipes((currentRecipes) => [...currentRecipes, savedRecipe]);
        })
        .catch(() => {});
    }
  };

  const handleLogin = ({ email, password }) => {
    loginUser({ email, password })
      .then(({ token, email: userEmail }) => {
        localStorage.setItem("recipe-finder-token", token);
        setCurrentUser({ name: "Demo User", email: userEmail });
        setActiveModal(null);
      })
      .catch(() => {});
  };

  const handleRegister = ({ name, email, password }) => {
    registerUser({ name, email, password })
      .then((user) => {
        setCurrentUser({ name: user.name, email: user.email });
        localStorage.setItem("recipe-finder-token", "demo-token");
        setActiveModal(null);
      })
      .catch(() => {});
  };

  const handleLogout = () => {
    localStorage.removeItem("recipe-finder-token");
    setCurrentUser(null);
  };

  return (
    <div className="page">
      <Header
        currentUser={currentUser}
        onLoginClick={() => setActiveModal("login")}
        onRegisterClick={() => setActiveModal("register")}
        onLogoutClick={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              recipes={recipes}
              visibleRecipeCount={visibleRecipeCount}
              savedRecipeIds={savedRecipeIds}
              isLoading={isLoading}
              errorMessage={errorMessage}
              hasSearched={hasSearched}
              onSearch={handleSearch}
              onSaveRecipe={handleSaveRecipe}
              onShowMore={handleShowMore}
            />
          }
        />
        <Route
          path="/saved-recipes"
          element={
            <SavedRecipes
              recipes={savedRecipes}
              savedRecipeIds={savedRecipeIds}
              onSaveRecipe={handleSaveRecipe}
            />
          }
        />
      </Routes>

      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        onLoginClick={handleLogin}
        onRegisterClick={() => setActiveModal("register")}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={() => setActiveModal(null)}
        onRegisterClick={handleRegister}
        onLoginClick={() => setActiveModal("login")}
      />
    </div>
  );
}

export default App;
