import "./SavedRecipes.css";
import RecipeCardList from "../RecipeCardList/RecipeCardList";

function SavedRecipes({
  recipes,
  savedRecipeIds,
  onSaveRecipe,
  onRecipeClick,
}) {
  return (
    <main className="saved">
      <section className="saved__intro">
        <p className="saved__eyebrow">Your cookbook</p>
        <h1 className="saved__title">Saved recipes</h1>
        <p className="saved__description">
          Keep your favorite meals together and open any recipe to view its
          ingredients and preparation steps.
        </p>
      </section>
      {recipes.length > 0 ? (
        <RecipeCardList
          recipes={recipes}
          savedRecipeIds={savedRecipeIds}
          onSaveRecipe={onSaveRecipe}
          onRecipeClick={onRecipeClick}
        />
      ) : (
        <p className="saved__empty">No saved recipes yet.</p>
      )}
    </main>
  );
}

export default SavedRecipes;
