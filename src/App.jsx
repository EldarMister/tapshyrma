// src/App.jsx

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import Cart from './components/Cart.jsx';
// import Checkout from './components/Checkout.jsx';
// import AccountProfile from './components/AccountProfile.jsx';
// import Contact from './components/Contact.jsx'; // Комментируем Contact
import ProductDetails from './components/ProductDetails.jsx'; // Импортируем ProductDetails
import './components/Cart.css';
import './components/Checkout.css';
import './components/AccountProfile.css';
import './components/Contact.css';
import './components/ProductDetails.css'; // Добавляем новый CSS

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <AccountProfile /> */}
        {/* <Contact /> */}
        <ProductDetails /> {/* Отображаем ProductDetails */}
      </main>
      <Footer />
    </>
  );
}

export default App;