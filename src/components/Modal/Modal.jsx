import { useEffect } from "react";

function Modal({ isOpen, title, children, onClose }) {
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

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <button
        className="modal__overlay"
        type="button"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          x
        </button>
        <h2 className="modal__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
