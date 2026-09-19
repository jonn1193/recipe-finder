import "./RecipeCardList.css";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeCardList({
  recipes,
  savedRecipeIds,
  onSaveRecipe,
  onRecipeClick,
}) {
  return (
    <ul className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          isSaved={savedRecipeIds.includes(recipe.idMeal)}
          onSaveRecipe={onSaveRecipe}
          onRecipeClick={onRecipeClick}
        />
      ))}
    </ul>
  );
}

export default RecipeCardList;
