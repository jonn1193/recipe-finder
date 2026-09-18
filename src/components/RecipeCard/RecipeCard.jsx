import "./RecipeCard.css";
function RecipeCard({ recipe, isSaved, onSaveRecipe, onRecipeClick }) {
  return (
    <li className="recipe-card">
      <button
        className="recipe-card__details"
        type="button"
        onClick={() => onRecipeClick(recipe)}
        aria-label={`View recipe details for ${recipe.strMeal}`}
      >
        <img
          className="recipe-card__image"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div>
          <p className="recipe-card__meta">
            {recipe.strArea} / {recipe.strCategory}
          </p>
          <h3 className="recipe-card__title">{recipe.strMeal}</h3>
        </div>
      </button>
      <div className="recipe-card__actions">
        <button
          className={`recipe-card__save ${
            isSaved ? "recipe-card__save_active" : ""
          }`}
          type="button"
          onClick={() => onSaveRecipe(recipe.idMeal)}
          aria-pressed={isSaved}
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </li>
  );
}

export default RecipeCard;
