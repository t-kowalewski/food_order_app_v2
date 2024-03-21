import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';
import OrderStepsContext from '../../store/orderSteps-context';

const HeaderCartBtn = () => {
  const cartCtx = useContext(CartContext);
  const { showCart } = useContext(OrderStepsContext);

  const cartItemsNumber = cartCtx.items.reduce(
    (acc, currVal) => acc + currVal.amount,
    0
  );

  return (
    <Button textOnly onClick={showCart}>
      Cart ({cartItemsNumber})
    </Button>
  );
};

export default HeaderCartBtn;
