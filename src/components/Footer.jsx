// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Колонка 1: Exclusive */}
        <div className="footer-column">
          <h4>Exclusive</h4>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>&gt;</button>
          </div>
        </div>

        {/* Колонка 2: Support */}
        <div className="footer-column">
          <h4>Support</h4>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Колонка 3: Account */}
        <div className="footer-column">
          <h4>Account</h4>
          <ul>
            <li><a href="/account">My Account</a></li>
            <li><a href="/login">Login / Register</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>

        {/* Колонка 4: Quick Link */}
        <div className="footer-column">
          <h4>Quick Link</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms Of Use</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Колонка 5: Download App */}
        <div className="footer-column">
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="app-download">
            <img src="/images/qr-code.png" alt="QR Code" className="qr-code" />
            <div className="app-stores">
              <img src="/images/google-play.png" alt="Google Play" />
              <img src="/images/app-store.png" alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;