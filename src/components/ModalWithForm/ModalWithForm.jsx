import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

function ModalWithForm({
  isOpen,
  title,
  buttonText,
  isValid,
  children,
  footer,
  onClose,
  onSubmit,
}) {
  return (
    <Modal isOpen={isOpen} ariaLabel={title} onClose={onClose}>
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" onSubmit={onSubmit} noValidate>
        {children}
        <button className="modal__submit" type="submit" disabled={!isValid}>
          {buttonText}
        </button>
        {footer}
      </form>
    </Modal>
  );
}

export default ModalWithForm;
