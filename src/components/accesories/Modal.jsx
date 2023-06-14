import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <h5 className="modal-close" onClick={onClose}>
          Close
        </h5>
      </div>
    </div>
  );
};

export default Modal;