import { formatPrice } from '../../util/formatting';

const MealItem = ({ id, name, price, description, image }) => {
  // will take fn from outside which will be managing cart state and accept id of an item
  const addToCartHandler = () => {
    console.log('added');
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
          {/* Later change to separate component */}
          <button className='button' onClick={addToCartHandler}>
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
