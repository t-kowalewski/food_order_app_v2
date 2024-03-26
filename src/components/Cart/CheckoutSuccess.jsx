import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import OrderStepsContext from '../../store/orderSteps-context';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const CheckoutSuccess = ({ clearData }) => {
  const { resetCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(OrderStepsContext);

  const handleCheckoutDone = () => {
    hideCheckout();
    resetCart();
    clearData();
  };

  return (
    <Modal open={progress === 'checkout'} escHandler={handleCheckoutDone}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We&#39;ll get back to you with more details via email as soon as
        possible
      </p>

      <p className='modal-actions'>
        <Button onClick={handleCheckoutDone}>Ok</Button>
      </p>
    </Modal>
  );
};

export default CheckoutSuccess;
