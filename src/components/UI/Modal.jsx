import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';

const Modal = ({ children, open, className }) => {
  const dialogRef = useRef(null);
  const modalClasses = className ? `modal ${className}` : 'modal';

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    }
    // else {
    //   dialogRef.current.close();
    // }
  }, [open]);

  return createPortal(
    <dialog className={modalClasses} ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
