// src/App.jsx

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './components/Cart.css'; // Подключаем наши новые стили

function App() {
  return (
    <>
      <Header />
      <main>
        <Cart />
      </main>
      <Footer />
    </>
  );
}

export default App;