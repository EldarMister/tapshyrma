// src/App.jsx

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import Cart from './components/Cart.jsx';
// import Checkout from './components/Checkout.jsx'; // Комментируем Checkout
import AccountProfile from './components/AccountProfile.jsx'; // Импортируем AccountProfile
import './components/Cart.css';      // Оставляем для общих стилей (кнопки и т.д.)
import './components/Checkout.css';  // Оставляем для общих стилей (формы и т.д.)
import './components/AccountProfile.css'; // Добавляем новый CSS

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Cart /> */}
        {/* <Checkout /> */}
        <AccountProfile /> {/* Отображаем AccountProfile */}
      </main>
      <Footer />
    </>
  );
}

export default App;