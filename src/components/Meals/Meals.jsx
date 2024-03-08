import { useState, useEffect } from 'react';
import { fetchAvailableMeals } from '../../http';

import MealItem from './MealItem';

const Meals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [error, setIsError] = useState(null);

  // Fetching available meals
  useEffect(() => {
    (async function () {
      setIsLoading(true);

      try {
        const fetchedMeals = await fetchAvailableMeals();
        setMeals(fetchedMeals);
      } catch (error) {
        setIsError({
          message: error.message || 'Error occured. Please try again later',
        });
      }

      setIsLoading(false);
    })();
  }, []);

  console.log(meals);

  // Error Case
  if (error) {
    // Move error logic to separate component ?
    return (
      <>
        <h2>An error occured!</h2>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <>
      {isLoading && <p>Fetching meals...</p>}

      {!isLoading && meals.length === 0 && <p>No meals available</p>}

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
