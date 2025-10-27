// src/App.jsx

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import Cart from './components/Cart.jsx';       // <-- Эту строку нужно закомментировать или удалить
import Checkout from './components/Checkout.jsx'; // <-- Эта строка должна быть
import './components/Cart.css';                // Стили для Cart оставляем (там общие стили)
import './components/Checkout.css';            // <-- Эта строка должна быть

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Cart /> */}                {/* <-- Эту строку нужно закомментировать или удалить */}
        <Checkout />                  {/* <-- А эта строка должна быть вместо Cart */}
      </main>
      <Footer />
    </>
  );
}

export default App;