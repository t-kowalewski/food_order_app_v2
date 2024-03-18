import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';

const HeaderCartBtn = () => {
  const cartCtx = useContext(CartContext);
  const cartItemsNumber = cartCtx.items.reduce(
    (acc, currVal) => acc + currVal.amount,
    0
  );

  return <Button textOnly>Cart ({cartItemsNumber})</Button>;
};

export default HeaderCartBtn;
