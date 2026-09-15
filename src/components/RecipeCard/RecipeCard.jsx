import "./RecipeCard.css";
function RecipeCard({ recipe, isSaved, onSaveRecipe }) {
  return (
    <li className="recipe-card">
      <img
        className="recipe-card__image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="recipe-card__content">
        <div>
          <p className="recipe-card__meta">
            {recipe.strArea} / {recipe.strCategory}
          </p>
          <h3 className="recipe-card__title">{recipe.strMeal}</h3>
        </div>
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

