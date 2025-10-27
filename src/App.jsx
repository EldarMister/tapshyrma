// src/App.jsx

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import Cart from './components/Cart.jsx';
// import Checkout from './components/Checkout.jsx';
// import AccountProfile from './components/AccountProfile.jsx'; // Комментируем AccountProfile
import About from './components/About.jsx'; // Импортируем About
import './components/Cart.css';
import './components/Checkout.css';
import './components/AccountProfile.css'; // Оставляем стили, т.к. хлебные крошки одинаковые
import './components/About.css'; // Добавляем стили для About

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <AccountProfile /> */}
        <About /> {/* Отображаем About */}
      </main>
      <Footer />
    </>
  );
}

export default App;