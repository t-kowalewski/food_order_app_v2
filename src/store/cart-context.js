import { createContext } from 'react';

const CartContext = createContext({
  items: [], // [{id: 'm1', name: 'Burger', amount: 2, price: 19.98}, ...]
  totalAmount: 0, // total amount to pay

  // fn to upd context
  // addItem: (item) => {},
  // removeItem: (id) => {}
});

export default CartContext;
