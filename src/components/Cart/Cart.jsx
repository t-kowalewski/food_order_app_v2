import { useContext } from 'react';
import { formatPrice } from '../../util/formatting';
import OrderStepsContext from '../../store/orderSteps-context';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartItem from './CartItem';

const Cart = () => {
  const { items, totalAmount } = useContext(CartContext);
  const { progress, hideCart } = useContext(OrderStepsContext);

  return (
    <Modal open={progress === 'cart'} className='cart' escHandler={hideCart}>
      <h2>Your Cart</h2>

      {/*Cart Items */}
      <ul>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </ul>

      <p className='cart-total'>{formatPrice(totalAmount)}</p>

      <p className='modal-actions'>
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        <Button onClick={hideCart}>Go To Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
