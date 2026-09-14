import Modal from "../Modal/Modal";

function LoginModal({ isOpen, onClose, onRegisterClick }) {
  return (
    <Modal isOpen={isOpen} title="Log in" onClose={onClose}>
      <form className="modal__form">
        <label className="modal__label" htmlFor="login-email">
          Email
        </label>
        <input
          className="modal__input"
          id="login-email"
          type="email"
          placeholder="you@example.com"
        />
        <label className="modal__label" htmlFor="login-password">
          Password
        </label>
        <input
          className="modal__input"
          id="login-password"
          type="password"
          placeholder="Enter your password"
        />
        <button className="modal__submit" type="button">
          Log in
        </button>
      </form>
      <p className="modal__switch">
        Not registered yet?{" "}
        <button className="modal__link" type="button" onClick={onRegisterClick}>
          Create an account
        </button>
      </p>
    </Modal>
  );
}

export default LoginModal;
