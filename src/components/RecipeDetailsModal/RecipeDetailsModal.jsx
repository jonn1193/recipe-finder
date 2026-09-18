import "./RecipeDetailsModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function getIngredients(recipe) {
  return Array.from({ length: 20 }, (_, index) => {
    const ingredient = recipe[`strIngredient${index + 1}`]?.trim();
    const measurement = recipe[`strMeasure${index + 1}`]?.trim();

    if (!ingredient) {
      return null;
    }

    return { ingredient, measurement };
  }).filter(Boolean);
}

function RecipeDetailsModal({
  recipe,
  isOpen,
  isSaved,
  onClose,
  onSaveRecipe,
}) {
  if (!recipe) {
    return null;
  }

  const ingredients = getIngredients(recipe);

  return (
    <ModalWithForm
      className="recipe-details-modal"
      isOpen={isOpen}
      title={recipe.strMeal}
      onClose={onClose}
    >
      <div className="recipe-details">
        <img
          className="recipe-details__image"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <p className="recipe-details__meta">
          {recipe.strArea} / {recipe.strCategory}
        </p>

        <section className="recipe-details__section">
          <h3 className="recipe-details__heading">Ingredients</h3>
          <ul className="recipe-details__ingredients">
            {ingredients.map(({ ingredient, measurement }) => (
              <li key={`${measurement}-${ingredient}`}>
                {measurement ? `${measurement} ` : ""}
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section className="recipe-details__section">
          <h3 className="recipe-details__heading">Preparation</h3>
          <p className="recipe-details__instructions">
            {recipe.strInstructions || "Preparation steps are not available."}
          </p>
        </section>

        <button
          className={`recipe-details__save ${
            isSaved ? "recipe-details__save_active" : ""
          }`}
          type="button"
          onClick={() => onSaveRecipe(recipe.idMeal)}
          aria-pressed={isSaved}
        >
          {isSaved ? "Remove from saved recipes" : "Save recipe"}
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RecipeDetailsModal;
