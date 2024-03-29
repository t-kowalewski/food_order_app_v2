import { useReducer } from 'react';
import CartContext from './cart-context';

const cartReducer = (currState, action) => {
  if (action.type === 'ADD') {
    // Check if added item already exists
    const existingItemIndex = currState.items.findIndex(
      (item) => item.id === action.payload.id
    );

    let updItems;

    if (existingItemIndex !== -1) {
      updItems = [...currState.items];
      updItems[existingItemIndex] = {
        ...updItems[existingItemIndex],
        amount: updItems[existingItemIndex].amount + 1,
      };
    } else {
      updItems = [...currState.items, action.payload];
    }

    const updTotalAmount = currState.totalAmount + +action.payload.price;

    return {
      ...currState,
      items: updItems,
      totalAmount: +updTotalAmount.toFixed(2),
    };
  }

  if (action.type === 'REMOVE') {
    const remItemIndex = currState.items.findIndex(
      (item) => item.id === action.payload
    );

    const updItem = {
      ...currState.items[remItemIndex],
      amount: currState.items[remItemIndex].amount - 1,
    };

    const updItems = [...currState.items];

    if (updItem.amount < 1) {
      updItems.splice(remItemIndex, 1);
    } else {
      updItems[remItemIndex] = updItem;
    }

    const updTotalAmount = currState.totalAmount - +updItem.price;

    return {
      ...currState,
      items: updItems,
      totalAmount: +updTotalAmount.toFixed(2), // handle floating numbs
    };
  }

  if (action.type === 'RESET') {
    return {
      ...currState,
      items: [],
      totalAmount: 0,
    };
  }
};

const CartProvider = (props) => {
  const addItemHandler = (item) => {
    dispatchCartContext({ type: 'ADD', payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartContext({ type: 'REMOVE', payload: id });
  };

  const resetCartHandler = () => {
    dispatchCartContext({ type: 'RESET' });
  };

  const [cartContext, dispatchCartContext] = useReducer(cartReducer, {
    items: [], // [{id: 'm1', name: 'Burger', amount: 2, price: 19.98}, ...]
    totalAmount: 0, // total amount to pay

    // fn to upd context
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    resetCart: resetCartHandler,
  });

  // console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
