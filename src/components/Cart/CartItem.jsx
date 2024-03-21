const CartItem = ({ name, price, amount }) => {
  return (
    <li className='cart-item'>
      <p>
        {name} - 1 x ${+price}
      </p>

      <div className='cart-item-actions'>
        <button>-</button>
        <p>{amount}</p>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
