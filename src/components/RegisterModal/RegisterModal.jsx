import Modal from "../Modal/Modal";

function RegisterModal({ isOpen, onClose, onLoginClick }) {
  return (
    <Modal isOpen={isOpen} title="Sign up" onClose={onClose}>
      <form className="modal__form">
        <label className="modal__label" htmlFor="register-name">
          Name
        </label>
        <input
          className="modal__input"
          id="register-name"
          type="text"
          placeholder="Your name"
        />
        <label className="modal__label" htmlFor="register-email">
          Email
        </label>
        <input
          className="modal__input"
          id="register-email"
          type="email"
          placeholder="you@example.com"
        />
        <label className="modal__label" htmlFor="register-password">
          Password
        </label>
        <input
          className="modal__input"
          id="register-password"
          type="password"
          placeholder="Create a password"
        />
        <button className="modal__submit" type="button">
          Sign up
        </button>
      </form>
      <p className="modal__switch">
        Already have an account?{" "}
        <button className="modal__link" type="button" onClick={onLoginClick}>
          Log in
        </button>
      </p>
    </Modal>
  );
}

export default RegisterModal;
