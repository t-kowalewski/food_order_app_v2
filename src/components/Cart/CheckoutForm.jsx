import { useContext } from 'react';
import { formatPrice } from '../../util/formatting';
import { sendOrder } from '../../util/http';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import OrderStepsContext from '../../store/orderSteps-context';
import Input from '../UI/Input';
import Button from '../UI/Button';

const CheckoutForm = () => {
  const { items, totalAmount } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(OrderStepsContext);

  // Submit Form Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Submitted!');

    // get data from form inputs
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    // console.log(data);

    // combine data with order info (cart)
    const order = {
      items,
      totalAmount,
      customer: data,
    };

    // send data via http request to backend
    try {
      const resp = await sendOrder(order);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={progress === 'checkout'} escHandler={hideCheckout}>
      <form onSubmit={submitHandler}>
        <h2>Checkout</h2>
        <p>Total amount: {formatPrice(totalAmount)}</p>

        {/* Form Input */}
        <Input id='name' label='Full Name' type='text' />
        <Input id='email' label='Your Email' type='email' />
        <Input id='street' label='Street' type='text' />

        <div className='control-row'>
          <Input id='postal-code' label='Postal Code' type='number' />
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
