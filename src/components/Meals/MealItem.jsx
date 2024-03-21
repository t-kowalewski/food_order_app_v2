import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import { formatPrice } from '../../util/formatting';
import Button from '../UI/Button';

const MealItem = ({ id, name, price, description, image }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({ id, name, amount: 1, price });
  };

  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className='meal-item-price'>{formatPrice(price)}</p>
          <p className='meal-item-description'>{description}</p>
        </div>

        <p className='meal-item-actions'>
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
