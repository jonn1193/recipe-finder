import Navigation from "../Navigation/Navigation";

function Header({ currentPath, onNavigate, onLoginClick, onRegisterClick }) {
  return (
    <header className="header">
      <button
        className="header__logo"
        type="button"
        onClick={() => onNavigate("/")}
        aria-label="Go to homepage"
      >
        Recipe Finder
      </button>
      <Navigation
        currentPath={currentPath}
        onNavigate={onNavigate}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
      />
    </header>
  );
}

export default Header;
