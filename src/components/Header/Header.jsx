import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ currentUser, onLoginClick, onRegisterClick, onLogoutClick }) {
  return (
    <header className="header">
      <Link className="header__logo" to="/" aria-label="Go to homepage">
        Recipe Finder
      </Link>
      <Navigation
        currentUser={currentUser}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        onLogoutClick={onLogoutClick}
      />
    </header>
  );
}

export default Header;

