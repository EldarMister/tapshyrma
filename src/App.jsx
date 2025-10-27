// src/App.jsx

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import Cart from './components/Cart.jsx';
// import Checkout from './components/Checkout.jsx';
// import AccountProfile from './components/AccountProfile.jsx'; // Комментируем
import Contact from './components/Contact.jsx'; // Импортируем Contact
import './components/Cart.css';
import './components/Checkout.css';
import './components/AccountProfile.css';
import './components/Contact.css'; // Добавляем стили для Contact

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <AccountProfile /> */}
        <Contact /> {/* Отображаем Contact */}
      </main>
      <Footer />
    </>
  );
}

export default App;