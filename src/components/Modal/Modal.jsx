import { useEffect } from "react";
import "../ModalWithForm/ModalWithForm.css";

function Modal({ isOpen, ariaLabel, className = "", onClose, children }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${className}`.trim()}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onMouseDown={handleOverlayClick}
    >
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
