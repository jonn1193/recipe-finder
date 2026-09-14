import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label className="search__label" htmlFor="recipe-search">
        Search recipes
      </label>
      <div className="search__row">
        <input
          className="search__input"
          id="recipe-search"
          name="search"
          type="search"
          placeholder="Try chicken, pasta, or vegetarian"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
