import { useState } from 'react';
import OrderStepsContext from './orderSteps-context';

const OrderStepsProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState('');

  const showCart = () => {
    setUserProgress('cart');
  };
  const hideCart = () => {
    setUserProgress('');
  };

  const showCheckout = () => {
    setUserProgress('checkout');
  };
  const hideCheckout = () => {
    setUserProgress('');
  };

  const orderStepsCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <OrderStepsContext.Provider value={orderStepsCtx}>
      {children}
    </OrderStepsContext.Provider>
  );
};

export default OrderStepsProvider;
