import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';

const Modal = ({ children, open, className, escHandler }) => {
  const dialogRef = useRef(null);
  const modalClasses = className ? `modal ${className}` : 'modal';

  useEffect(() => {
    const modal = dialogRef.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog className={modalClasses} ref={dialogRef} onCancel={escHandler}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
