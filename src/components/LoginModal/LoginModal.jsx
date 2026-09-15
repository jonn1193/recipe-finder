import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLoginClick, onRegisterClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    onLoginClick({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <ModalWithForm isOpen={isOpen} title="Log in" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <label className="modal__label" htmlFor="login-email">
          Email
        </label>
        <input
          className="modal__input"
          id="login-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <label className="modal__label" htmlFor="login-password">
          Password
        </label>
        <input
          className="modal__input"
          id="login-password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <button className="modal__submit" type="submit">
          Log in
        </button>
      </form>
      <p className="modal__switch">
        Not registered yet?{" "}
        <button className="modal__link" type="button" onClick={onRegisterClick}>
          Create an account
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;

