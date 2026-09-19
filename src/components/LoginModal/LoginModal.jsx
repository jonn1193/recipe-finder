import { useEffect } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function LoginModal({ isOpen, onClose, onLoginClick, onRegisterClick }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm({ email: "", password: "" });
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    onLoginClick({
      email: values.email,
      password: values.password,
    });
  };

  const footer = (
    <p className="modal__switch">
      Not registered yet?{" "}
      <button className="modal__link" type="button" onClick={onRegisterClick}>
        Create an account
      </button>
    </p>
  );

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Log in"
      buttonText="Log in"
      isValid={isValid}
      footer={footer}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
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
        value={values.email || ""}
        onChange={handleChange}
      />
      <span className="modal__error" aria-live="polite">
        {errors.email}
      </span>

      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        className="modal__input"
        id="login-password"
        name="password"
        type="password"
        placeholder="Enter your password"
        minLength="6"
        required
        value={values.password || ""}
        onChange={handleChange}
      />
      <span className="modal__error" aria-live="polite">
        {errors.password}
      </span>
    </ModalWithForm>
  );
}

export default LoginModal;
