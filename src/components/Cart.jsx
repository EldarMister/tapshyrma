// src/components/Cart.jsx

import React from 'react';

const Cart = () => {
  return (
    <div className="container">
      {/* Хлебные крошки */}
      <div className="breadcrumbs">
        <a href="/">Home</a> / <span>Cart</span>
      </div>

      <div className="cart-container">
        {/* Таблица товаров */}
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-cell">
                <img src="/images/gamepad.png" alt="H1 Gamepad" className="product-image" />
                H1 Gamepad
              </td>
              <td>$550</td>
              <td>
                <input type="number" defaultValue="2" className="quantity-input" />
              </td>
              <td>$1100</td>
            </tr>
            {/* Здесь можно будет добавлять другие товары */}
          </tbody>
        </table>

        {/* Кнопки управления */}
        <div className="cart-actions">
          <button className="btn-secondary">Return To Shop</button>
          <button className="btn-secondary">Update Cart</button>
        </div>

        {/* Нижняя секция: Купон + Итоги */}
        <div className="cart-bottom">
          <div className="coupon-code">
            <input type="text" placeholder="Coupon Code" />
            <button className="btn-primary">Apply Coupon</button>
          </div>

          <div className="cart-total">
            <h3>Cart Total</h3>
            <div className="total-row">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="total-row total-amount">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <button className="btn-primary btn-checkout">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;