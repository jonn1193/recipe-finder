import "./SavedRecipes.css";
import RecipeCardList from "../RecipeCardList/RecipeCardList";

function SavedRecipes({ recipes, savedRecipeIds, onSaveRecipe }) {
  return (
    <main className="saved">
      <section className="saved__intro">
        <p className="saved__eyebrow">Your cookbook</p>
        <h1 className="saved__title">Saved recipes</h1>
        <p className="saved__description">
          This page will show recipes saved by the logged-in user once the app
          is connected to a real API.
        </p>
      </section>
      {recipes.length > 0 ? (
        <RecipeCardList
          recipes={recipes}
          savedRecipeIds={savedRecipeIds}
          onSaveRecipe={onSaveRecipe}
        />
      ) : (
        <p className="saved__empty">No saved recipes yet.</p>
      )}
    </main>
  );
}

export default SavedRecipes;

