// src/components/ProductDetails.jsx
import React, { useState } from 'react';
import './ProductDetails.css'; // Подключим стили
import { FiStar, FiHeart } from 'react-icons/fi'; // Иконки звезд и сердца
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Иконки для рейтинга
import { FiTruck, FiRefreshCw } from 'react-icons/fi'; // Иконки доставки/возврата

// Компонент для отображения звезд рейтинга
const StarRating = ({ rating, reviews }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="star filled" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} className="star half" />);
    } else {
      stars.push(<FiStar key={i} className="star empty" />);
    }
  }
  return <div className="rating">{stars} <span className="reviews">({reviews} Reviews)</span></div>;
};


const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1); // Состояние для количества

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount)); // Не даем уйти ниже 1
  };

  // Пример данных продукта
  const product = {
    name: "Havic HV G-92 Gamepad",
    rating: 4.5, // Пример рейтинга
    reviews: 150,
    price: 192.00,
    inStock: true,
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    images: [
      "/images/gamepad-main.png", // Основное изображение
      "/images/gamepad-thumb1.png",
      "/images/gamepad-thumb2.png",
      "/images/gamepad-thumb3.png",
      "/images/gamepad-thumb4.png",
    ],
    colors: ["#A0BCE0", "#DB4444"], // Голубой и красный
    sizes: ["XS", "S", "M", "L", "XL"]
  };

  // Пример похожих товаров
  const relatedItems = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", oldPrice: 160, price: 120, rating: 4.5, reviews: 88, image: '/images/related-gamepad.png', discount: '-40%' },
    { id: 2, name: "AK-900 Wired Keyboard", oldPrice: 1160, price: 960, rating: 4.0, reviews: 75, image: '/images/related-keyboard.png', discount: '-35%' },
    { id: 3, name: "IPS LCD Gaming Monitor", oldPrice: 400, price: 370, rating: 5.0, reviews: 99, image: '/images/related-monitor.png', discount: '-30%' },
    { id: 4, name: "RGB liquid CPU Cooler", oldPrice: 170, price: 160, rating: 4.0, reviews: 65, image: '/images/related-cooler.png' } // Без скидки
  ];

  return (
    <div className="container">
      {/* Хлебные крошки */}
      <div className="breadcrumbs account-breadcrumbs">
        <a href="/account">Account</a> / <a href="/gaming">Gaming</a> / <span>{product.name}</span>
      </div>

      {/* Основная секция продукта */}
      <section className="product-details-section">
        {/* Галерея изображений */}
        <div className="product-gallery">
          <div className="thumbnails">
            {product.images.slice(1).map((img, index) => (
              <div key={index} className="thumbnail-item">
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-image">
            <img src={product.images[0]} alt={product.name} />
          </div>
        </div>

        {/* Информация о продукте */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="product-meta">
             <StarRating rating={product.rating} reviews={product.reviews} />
             <span className="separator">|</span>
             <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
               {product.inStock ? 'In Stock' : 'Out of Stock'}
             </span>
          </div>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <hr className="info-divider" />

          {/* Опции: Цвет */}
          <div className="product-options">
            <span className="option-label">Colours:</span>
            <div className="color-options">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${color}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Опции: Размер */}
           <div className="product-options size-options">
             <span className="option-label">Size:</span>
            <div className="size-buttons">
               {product.sizes.map(size => (
                 <button key={size} className="size-button">{size}</button>
               ))}
             </div>
           </div>

          {/* Количество и кнопки */}
          <div className="product-actions">
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <button className="btn-primary buy-now-btn">Buy Now</button>
            <button className="wishlist-btn"><FiHeart /></button>
          </div>

          {/* Информация о доставке/возврате */}
          <div className="delivery-info">
             <div className="info-item">
                <FiTruck className="info-icon-delivery"/>
                <div>
                   <p className="info-title">Free Delivery</p>
                   <p className="info-subtitle">Enter your postal code for Delivery Availability</p>
                </div>
             </div>
             <hr className="info-divider"/>
             <div className="info-item">
                <FiRefreshCw className="info-icon-delivery"/>
                <div>
                  <p className="info-title">Return Delivery</p>
                  <p className="info-subtitle">Free 30 Days Delivery Returns. Details</p>
                </div>
             </div>
          </div>

        </div>
      </section>

       {/* Секция "Related Items" */}
       <section className="related-items-section">
          <div className="related-header">
             <div className="section-indicator"></div> {/* Красный квадратик */}
             <h3>Related Item</h3>
          </div>
          <div className="related-items-grid">
             {relatedItems.map(item => (
                <div key={item.id} className="related-item-card">
                  <div className="related-image-wrapper">
                      <img src={item.image} alt={item.name} />
                      {item.discount && <span className="discount-badge">{item.discount}</span>}
                      {/* Иконки можно добавить сюда */}
                       <div className="related-card-actions">
                         <button className="icon-button"><FiHeart /></button>
                         {/* <button className="icon-button"><FiEye /></button> */}
                       </div>
                       <button className="add-to-cart-btn">Add To Cart</button>
                  </div>
                  <p className="related-item-name">{item.name}</p>
                  <div className="related-item-price">
                    <span className="current-price">${item.price.toFixed(2)}</span>
                    {item.oldPrice && <span className="old-price">${item.oldPrice.toFixed(2)}</span>}
                  </div>
                  <StarRating rating={item.rating} reviews={item.reviews} />
                </div>
             ))}
          </div>
       </section>

    </div>
  );
};

export default ProductDetails;