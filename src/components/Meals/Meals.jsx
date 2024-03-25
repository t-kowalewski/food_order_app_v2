import useHttp from '../../hooks/useHttp';

import MealItem from './MealItem';
import Error from './Error';
const reqConfig = { method: 'GET' };

const Meals = () => {
  const {
    isLoading,
    data: meals,
    error,
  } = useHttp('http://localhost:3000/meals', reqConfig);

  // console.log(meals);

  // Error Case
  if (error) {
    return <Error title='Failed fetching meals' message={error} />;
  }

  return (
    <>
      {isLoading && <p className='center'>Fetching meals...</p>}

      {!isLoading && meals.length === 0 && (
        <p className='center'>No meals available</p>
      )}

      {!isLoading && meals.length > 0 && (
        <ul id='meals'>
          {meals.map((meal) => {
            return <MealItem key={meal.id} {...meal} />;
          })}
        </ul>
      )}
    </>
  );
};

export default Meals;
