import { useContext } from 'react';
import useHttp from '../../hooks/useHttp';
import { formatPrice } from '../../util/formatting';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import OrderStepsContext from '../../store/orderSteps-context';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Error from '../Meals/Error';
import CheckoutSuccess from './CheckoutSuccess';

const reqConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const CheckoutForm = () => {
  const { items, totalAmount } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(OrderStepsContext);

  const {
    isLoading: isSending,
    data,
    error,
    sendRequest,
    clearData,
  } = useHttp('http://localhost:3000/orders', reqConfig);

  // Submit Form Handler
  const submitHandler = async (e) => {
    e.preventDefault();

    // get data from form inputs
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    // combine data with order info (cart)
    const order = {
      items,
      totalAmount,
      customer: data,
    };

    // send data via http request to backend
    sendRequest(order);
  };

  // Form Actions - loading/sending logic
  let actions = (
    <>
      <Button textOnly type='button' onClick={hideCheckout}>
        Close
      </Button>

      {/* Handle data submission */}
      <Button>Submit Order</Button>
    </>
  );

  // Loading Case
  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  // Order Success
  if (data.message === 'Order created!' && !error) {
    return <CheckoutSuccess clearData={clearData} />;
  }

  // Regular Checkout Form
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

        {/* Error Case */}
        {error && <Error title='Order submission failed' message={error} />}

        {/* Form Actions */}
        <p className='modal-actions'>{actions}</p>
      </form>
    </Modal>
  );
};

export default CheckoutForm;
