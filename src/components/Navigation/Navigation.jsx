function Navigation({
  currentPath,
  onNavigate,
  onLoginClick,
  onRegisterClick,
}) {
  return (
    <nav className="nav" aria-label="Main navigation">
      <button
        className={`nav__link ${currentPath === "/" ? "nav__link_active" : ""}`}
        type="button"
        onClick={() => onNavigate("/")}
      >
        Search
      </button>
      <button
        className={`nav__link ${
          currentPath === "/saved-recipes" ? "nav__link_active" : ""
        }`}
        type="button"
        onClick={() => onNavigate("/saved-recipes")}
      >
        Saved Recipes
      </button>
      <div className="nav__actions">
        <button className="nav__button" type="button" onClick={onLoginClick}>
          Log in
        </button>
        <button
          className="nav__button nav__button_primary"
          type="button"
          onClick={onRegisterClick}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
