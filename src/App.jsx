import { useEffect, useState } from "react";
import "./App.css";
import { sampleRecipes } from "./utils/sampleRecipes";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SavedRecipes from "./components/SavedRecipes/SavedRecipes";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [activeModal, setActiveModal] = useState(null);
  const [savedRecipeIds, setSavedRecipeIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const handleSearch = () => {
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 700);
  };

  const handleSaveRecipe = (recipeId) => {
    setSavedRecipeIds((currentIds) =>
      currentIds.includes(recipeId)
        ? currentIds.filter((id) => id !== recipeId)
        : [...currentIds, recipeId],
    );
  };

  const savedRecipes = sampleRecipes.filter((recipe) =>
    savedRecipeIds.includes(recipe.idMeal),
  );

  return (
    <div className="page">
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onLoginClick={() => setActiveModal("login")}
        onRegisterClick={() => setActiveModal("register")}
      />

      {currentPath === "/saved-recipes" ? (
        <SavedRecipes
          recipes={savedRecipes}
          savedRecipeIds={savedRecipeIds}
          onSaveRecipe={handleSaveRecipe}
        />
      ) : (
        <Main
          recipes={sampleRecipes}
          savedRecipeIds={savedRecipeIds}
          isLoading={isLoading}
          onSearch={handleSearch}
          onSaveRecipe={handleSaveRecipe}
        />
      )}

      <Footer />

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        onRegisterClick={() => setActiveModal("register")}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={() => setActiveModal(null)}
        onLoginClick={() => setActiveModal("login")}
      />
    </div>
  );
}

export default App;
