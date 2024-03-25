// GET available meals
export async function fetchAvailableMeals() {
  const res = await fetch('http://localhost:3000/meals');

  if (!res.ok) {
    throw new Error('Failed to fetch meals');
  }

  const data = await res.json();
  return data;
}

// POST - send complete order
export async function sendOrder(order) {
  // second argument for fetch is configuration object
  // headers - additional meta-data attached to the request
  const res = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ order: order }),
  });

  if (!res.ok) {
    throw new Error("Failed to send user's order");
  }

  const data = await res.json();
  return data.message;
}
