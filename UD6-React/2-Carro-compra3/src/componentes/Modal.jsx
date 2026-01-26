import '../estilos/Modal.css';

// Componente reutilizable de Modal
// isOpen: boolean que determina si el modal se muestra o no
// onClose: función que se ejecuta para cerrar el modal
// children: contenido que se renderiza dentro del modal (pueden ser formularios, información, etc.)

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;