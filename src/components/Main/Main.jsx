import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import RecipeCardList from "../RecipeCardList/RecipeCardList";
import Preloader from "../Preloader/Preloader";

function Main({
  recipes,
  visibleRecipeCount,
  savedRecipeIds,
  isLoading,
  errorMessage,
  hasSearched,
  onSearch,
  onSaveRecipe,
  onShowMore,
}) {
  const visibleRecipes = recipes.slice(0, visibleRecipeCount);
  const hasMoreRecipes = visibleRecipeCount < recipes.length;
  const showNothingFound = hasSearched && !isLoading && !errorMessage && !recipes.length;

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
          <p className="recipes__label">Recipe results</p>
          <h2 className="recipes__title" id="recipes-title">
            Meals from TheMealDB
          </h2>
        </div>

        {isLoading && <Preloader />}
        {errorMessage && <p className="recipes__message">{errorMessage}</p>}
        {showNothingFound && <p className="recipes__message">Nothing found</p>}
        {!isLoading && !errorMessage && recipes.length > 0 && (
          <>
            <RecipeCardList
              recipes={visibleRecipes}
              savedRecipeIds={savedRecipeIds}
              onSaveRecipe={onSaveRecipe}
            />
            {hasMoreRecipes && (
              <button
                className="recipes__show-more"
                type="button"
                onClick={onShowMore}
              >
                Show more
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Main;

