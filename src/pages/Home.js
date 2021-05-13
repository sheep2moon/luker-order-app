import React from 'react';
import '../styles/home.scss';

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='hero-card'>
          <h1>Cukiernia Luker</h1>
          <h2>Słodkości na dowóz</h2>
          <p>Dla zamówień powyżej 50zł dowóz gratis</p>
          <button>Przejdź do oferty</button>
        </div>
        <div className='featured-products'>
          <h1>Wyróżnione produkty</h1>
          <p>produkty</p>
        </div>
      </div>
    </>
  );
};

export default Home;
