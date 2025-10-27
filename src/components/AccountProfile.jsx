// src/components/AccountProfile.jsx
import React from 'react';
import './AccountProfile.css'; // Создадим этот CSS-файл следующим шагом

const AccountProfile = () => {
  // Пример данных пользователя
  const userName = "Md Rimel";

  return (
    <div className="container">
      {/* Хлебные крошки и приветствие */}
      <div className="account-header">
        <div className="breadcrumbs account-breadcrumbs">
          <a href="/">Home</a> / <span>My Account</span>
        </div>
        <div className="welcome-message">
          Welcome! <span className="welcome-username">{userName}</span>
        </div>
      </div>

      <div className="account-container">
        {/* Боковая панель навигации */}
        <aside className="account-sidebar">
          <div className="sidebar-section">
            <h4>Manage My Account</h4>
            <ul>
              <li className="active"><a href="/account/profile">My Profile</a></li>
              <li><a href="/account/address">Address Book</a></li>
              <li><a href="/account/payment">My Payment Options</a></li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h4>My Orders</h4>
            <ul>
              <li><a href="/account/returns">My Returns</a></li>
              <li><a href="/account/cancellations">My Cancellations</a></li>
            </ul>
          </div>
          <div className="sidebar-section">
             {/* Ссылка "My Wishlist" стоит отдельно на картинке */}
             <a href="/account/wishlist" className="wishlist-link">My Wishlist</a>
          </div>
        </aside>

        {/* Основная область: Форма редактирования профиля */}
        <main className="account-main">
          <div className="edit-profile-form">
            <h3>Edit Your Profile</h3>
            <form>
              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" defaultValue="Md" />
                </div>
                <div className="form-group half-width">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" defaultValue="Rimel" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" defaultValue="rimel1111@gmail.com" />
                </div>
                <div className="form-group half-width">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" defaultValue="Kingston, 5236, United State" />
                </div>
              </div>

              <div className="form-group password-section">
                <label>Password Changes</label>
                <input type="password" placeholder="Current Passwod" />
                <input type="password" placeholder="New Passwod" />
                <input type="password" placeholder="Confirm New Passwod" />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel">Cancel</button>
                <button type="submit" className="btn-primary btn-save">Save Changes</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountProfile;