import { useContext } from 'react';
import { formatPrice } from '../../util/formatting';
import CartContext from '../../store/cart-context';

const CartItem = ({ id, name, price, amount }) => {
  const { addItem, removeItem } = useContext(CartContext);

  const addHandler = () => {
    addItem({ id, name, amount, price });
  };
  const removeHandler = () => {
    removeItem(id);
  };

  return (
    <li className='cart-item'>
      <p>
        {name} - {amount} x {formatPrice(price)}
      </p>

      <p className='cart-item-actions'>
        <button onClick={removeHandler}>-</button>
        <span>{amount}</span>
        <button onClick={addHandler}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
