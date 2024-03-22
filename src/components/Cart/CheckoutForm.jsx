import { useContext } from 'react';
import { formatPrice } from '../../util/formatting';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import OrderStepsContext from '../../store/orderSteps-context';
import Input from '../UI/Input';
import Button from '../UI/Button';

const CheckoutForm = () => {
  const { totalAmount } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(OrderStepsContext);

  const checkoutSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted!');
  };

  return (
    <Modal open={progress === 'checkout'} escHandler={hideCheckout}>
      <form onSubmit={checkoutSubmitHandler}>
        <h2>Checkout</h2>
        <p>Total amount: {formatPrice(totalAmount)}</p>

        {/* Form Input */}
        <Input id='fullName' label='Full Name' type='text' />
        <Input id='email' label='Your Email' type='email' />
        <Input id='street' label='Street' type='text' />

        <div className='control-row'>
          <Input id='postalCode' label='Postal Code' type='number' />
          <Input id='city' label='City' type='text' />
        </div>

        {/* Form Actions */}
        <p className='modal-actions'>
          <Button textOnly type='button' onClick={hideCheckout}>
            Close
          </Button>

          {/* Handle data submission */}
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default CheckoutForm;
