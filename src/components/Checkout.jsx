// src/components/Checkout.jsx

import React from 'react';
import './Checkout.css';
const Checkout = () => {
  // Данные для примера (позже их можно будет получать из состояния)
  const cartItems = [
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: '/images/lcd-monitor.png' }, // Картинку нужно добавить
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: '/images/gamepad.png' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Бесплатная доставка по условию
  const total = subtotal + shipping;

  return (
    <div className="container">
      {/* Хлебные крошки */}
      <div className="breadcrumbs">
        <a href="/account">Account</a> / <a href="/account">My Account</a> / <a href="/product">Product</a> / <a href="/cart">View Cart</a> / <span>CheckOut</span>
      </div>

      <div className="checkout-container">
        {/* Левая колонка: Форма Billing Details */}
        <div className="billing-details">
          <h2>Billing Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" id="companyName" />
            </div>
            <div className="form-group">
              <label htmlFor="streetAddress">Street Address*</label>
              <input type="text" id="streetAddress" required />
            </div>
            <div className="form-group">
              <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
              <input type="text" id="apartment" />
            </div>
            <div className="form-group">
              <label htmlFor="townCity">Town/City*</label>
              <input type="text" id="townCity" required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number*</label>
              <input type="tel" id="phoneNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address*</label>
              <input type="email" id="emailAddress" required />
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        {/* Правая колонка: Итоги заказа */}
        <div className="order-summary">
          {cartItems.map(item => (
            <div key={item.id} className="summary-item">
              <div className="summary-item-info">
                <img src={item.image} alt={item.name} className="summary-item-image" />
                <span>{item.name}</span>
              </div>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}

          <div className="summary-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <hr />
            <div className="total-row">
              <span>Shipping:</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
            </div>
            <hr />
            <div className="total-row total-amount">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>

          <div className="payment-method">
            <div className="payment-option">
              <input type="radio" id="bank" name="payment" value="bank" defaultChecked />
              <label htmlFor="bank">Bank</label>
              {/* Добавить иконки банков */}
              <div className="bank-icons">
                 <img src="/images/visa.png" alt="Visa" />
                 <img src="/images/mastercard.png" alt="Mastercard" />
                 {/* Добавь другие иконки, если нужно */}
              </div>
            </div>
            <div className="payment-option">
              <input type="radio" id="cash" name="payment" value="cash" />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>

          <div className="coupon-code checkout-coupon">
            <input type="text" placeholder="Coupon Code" />
            <button className="btn-primary">Apply Coupon</button>
          </div>

          <button className="btn-primary place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;