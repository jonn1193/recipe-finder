import SearchForm from "../SearchForm/SearchForm";
import RecipeCardList from "../RecipeCardList/RecipeCardList";
import Preloader from "../Preloader/Preloader";

function Main({ recipes, savedRecipeIds, isLoading, onSearch, onSaveRecipe }) {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Simple meals, saved for later</p>
          <h1 className="hero__title">
            Find dinner ideas without opening ten tabs.
          </h1>
          <p className="hero__description">
            Search recipes by ingredient, cuisine, or craving, then keep your
            favorites in one tidy place.
          </p>
          <SearchForm onSearch={onSearch} />
        </div>
      </section>

      <section className="recipes" aria-labelledby="recipes-title">
        <div className="recipes__heading">
          <p className="recipes__label">Starter results</p>
          <h2 className="recipes__title" id="recipes-title">
            Popular recipes
          </h2>
        </div>
        {isLoading ? (
          <Preloader />
        ) : (
          <RecipeCardList
            recipes={recipes}
            savedRecipeIds={savedRecipeIds}
            onSaveRecipe={onSaveRecipe}
          />
        )}
      </section>
    </main>
  );
}

export default Main;
