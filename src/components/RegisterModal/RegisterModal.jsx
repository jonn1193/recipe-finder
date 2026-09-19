import { useEffect } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function RegisterModal({ isOpen, onClose, onRegisterClick, onLoginClick }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm({ name: "", email: "", password: "" });
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    onRegisterClick({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  const footer = (
    <p className="modal__switch">
      Already have an account?{" "}
      <button className="modal__link" type="button" onClick={onLoginClick}>
        Log in
      </button>
    </p>
  );

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign up"
      buttonText="Sign up"
      isValid={isValid}
      footer={footer}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="register-name">
        Name
      </label>
      <input
        className="modal__input"
        id="register-name"
        name="name"
        type="text"
        placeholder="Your name"
        minLength="2"
        maxLength="40"
        required
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className="modal__error" aria-live="polite">
        {errors.name}
      </span>

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
        value={values.email || ""}
        onChange={handleChange}
      />
      <span className="modal__error" aria-live="polite">
        {errors.email}
      </span>

      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        className="modal__input"
        id="register-password"
        name="password"
        type="password"
        placeholder="Create a password"
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

export default RegisterModal;
