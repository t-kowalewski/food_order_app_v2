import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import OrderStepsProvider from './store/OrderStepsProvider';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <OrderStepsProvider>
      <CartProvider>
        <Header />
        <Meals />

        <Cart />
      </CartProvider>
    </OrderStepsProvider>
  );
}

export default App;
