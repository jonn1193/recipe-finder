import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onRegisterClick, onLoginClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    onRegisterClick({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <ModalWithForm isOpen={isOpen} title="Sign up" onClose={onClose}>
      <form className="modal__form" onSubmit={handleSubmit}>
        <label className="modal__label" htmlFor="register-name">
          Name
        </label>
        <input
          className="modal__input"
          id="register-name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
        <label className="modal__label" htmlFor="register-email">
          Email
        </label>
        <input
          className="modal__input"
          id="register-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <label className="modal__label" htmlFor="register-password">
          Password
        </label>
        <input
          className="modal__input"
          id="register-password"
          name="password"
          type="password"
          placeholder="Create a password"
          required
        />
        <button className="modal__submit" type="submit">
          Sign up
        </button>
      </form>
      <p className="modal__switch">
        Already have an account?{" "}
        <button className="modal__link" type="button" onClick={onLoginClick}>
          Log in
        </button>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;

