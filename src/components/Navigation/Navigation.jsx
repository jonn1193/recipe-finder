import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({
  currentUser,
  onLoginClick,
  onRegisterClick,
  onLogoutClick,
}) {
  const getNavLinkClassName = ({ isActive }) =>
    `nav__link ${isActive ? "nav__link_active" : ""}`;

  return (
    <nav className="nav" aria-label="Main navigation">
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      {currentUser && (
        <NavLink className={getNavLinkClassName} to="/saved-recipes">
          Saved Recipes
        </NavLink>
      )}
      <div className="nav__actions">
        {currentUser ? (
          <>
            <span className="nav__user">{currentUser.name}</span>
            <button
              className="nav__button"
              type="button"
              onClick={onLogoutClick}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <button
              className="nav__button"
              type="button"
              onClick={onLoginClick}
            >
              Log in
            </button>
            <button
              className="nav__button nav__button_primary"
              type="button"
              onClick={onRegisterClick}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
