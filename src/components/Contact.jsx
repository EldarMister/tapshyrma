// src/components/Contact.jsx
import React from 'react';
import './Contact.css'; // Подключим стили
import { FiPhone, FiMail } from 'react-icons/fi'; // Иконки

const Contact = () => {
  return (
    <div className="container">
      {/* Хлебные крошки */}
      <div className="breadcrumbs account-breadcrumbs"> {/* Используем стиль от Account */}
        <a href="/">Home</a> / <span>Contact</span>
      </div>

      <div className="contact-container">
        {/* Левая колонка */}
        <aside className="contact-info">
          <div className="info-block">
            <div className="info-header">
              <div className="info-icon phone-icon"><FiPhone /></div>
              <h4>Call To Us</h4>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <hr className="info-divider" />

          <div className="info-block">
            <div className="info-header">
              <div className="info-icon mail-icon"><FiMail /></div>
              <h4>Write To US</h4>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </aside>

        {/* Правая колонка: Форма */}
        <main className="contact-form-section">
          <form className="contact-form">
            <div className="form-row-triplet">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="tel" placeholder="Your Phone *" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="8"></textarea>
            </div>
            <div className="form-actions contact-form-actions">
              <button type="submit" className="btn-primary">Send Message</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Contact;