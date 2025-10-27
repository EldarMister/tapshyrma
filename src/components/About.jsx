// src/components/About.jsx
import React from 'react';
import './About.css'; // Подключим стили
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Иконки соцсетей
import { FiBox, FiHeadphones, FiCheckCircle } from 'react-icons/fi'; // Иконки для секции "гарантий"

const About = () => {
  return (
    <div className="container">
      {/* Хлебные крошки */}
      <div className="breadcrumbs account-breadcrumbs"> {/* Используем стиль от Account */}
        <a href="/">Home</a> / <span>About</span>
      </div>

      {/* Секция "Our Story" */}
      <section className="our-story-section">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported
            by wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3
            millions customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="story-image">
          {/* Нужно добавить картинку /images/about-story.png */}
          <img src="/images/about-story.png" alt="Women shopping" />
        </div>
      </section>

      {/* Секция со статистикой */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-icon-wrapper"><FiBox /></div> {/* Пример иконки */}
          <h3>10.5k</h3>
          <p>Sellers active our site</p>
        </div>
        <div className="stat-card active"> {/* Активная красная карточка */}
           <div className="stat-icon-wrapper"><FiBox /></div> {/* Пример иконки */}
          <h3>33k</h3>
          <p>Monthly Production Sale</p>
        </div>
        <div className="stat-card">
           <div className="stat-icon-wrapper"><FiBox /></div> {/* Пример иконки */}
          <h3>45.5k</h3>
          <p>Customer active in our site</p>
        </div>
        <div className="stat-card">
           <div className="stat-icon-wrapper"><FiBox /></div> {/* Пример иконки */}
          <h3>25k</h3>
          <p>Annual gross sale in our site</p>
        </div>
      </section>

      {/* Секция с командой */}
      <section className="team-section">
        <div className="team-member">
          {/* Нужно добавить картинку /images/tom-cruise.png */}
          <div className="team-image-wrapper">
             <img src="/images/tom-cruise.png" alt="Tom Cruise" />
          </div>
          <h4>Tom Cruise</h4>
          <p>Founder & Chairman</p>
          <div className="team-social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="team-member">
           {/* Нужно добавить картинку /images/emma-watson.png */}
           <div className="team-image-wrapper">
             <img src="/images/emma-watson.png" alt="Emma Watson" />
          </div>
          <h4>Emma Watson</h4>
          <p>Managing Director</p>
          <div className="team-social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="team-member">
           {/* Нужно добавить картинку /images/will-smith.png */}
           <div className="team-image-wrapper">
            <img src="/images/will-smith.png" alt="Will Smith" />
          </div>
          <h4>Will Smith</h4>
          <p>Product Designer</p>
          <div className="team-social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </section>
      {/* Здесь можно добавить точки-пагинацию, если нужно */}

       {/* Секция "гарантий" */}
      <section className="features-section">
         <div className="feature-card">
           <div className="feature-icon-wrapper"><FiBox /></div>
           <h4>FREE AND FAST DELIVERY</h4>
           <p>Free delivery for all orders over $140</p>
         </div>
          <div className="feature-card">
           <div className="feature-icon-wrapper"><FiHeadphones /></div>
           <h4>24/7 CUSTOMER SERVICE</h4>
           <p>Friendly 24/7 customer support</p>
         </div>
         <div className="feature-card">
           <div className="feature-icon-wrapper"><FiCheckCircle /></div>
           <h4>MONEY BACK GUARANTEE</h4>
           <p>We return money within 30 days</p>
         </div>
      </section>

    </div>
  );
};

export default About;