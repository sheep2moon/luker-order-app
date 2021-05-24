import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';
import '../styles/layout.scss';
import logoIcon from '../assets/logo.svg';
import menuIcon from '../assets/menu.svg';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Layout = ({ children }) => {
  const { cart } = useCart();
  const { login, user } = useAuth();
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  if (!user) {
    login();
  }
  return (
    <>
      <nav>
        <div className='logo-container'>
          <img src={logoIcon} alt='' width='50' />
          <p>Luker</p>
        </div>
        <div className='desktop-menu'>
          <ul>
            <li>
              <Link to='/'>Strona Główna</Link>
            </li>
            <li>
              <Link to='/shop'>Oferta</Link>
            </li>
            <li>
              <Link to='/'>Kontakt</Link>
            </li>
            <li>
              <Link to='/add-product'>Dodaj produkt</Link>
            </li>
          </ul>
        </div>
        <div className='mobile-menu-button'>
          <img
            src={menuIcon}
            alt=''
            onClick={() => setMobileMenuActive(!mobileMenuActive)}
          />
        </div>

        <div className='cart-icon'>
          <p>{cart.length}</p>
          <Link to='/cart'>
            <img src={cartIcon} alt='' width='50' />
          </Link>
        </div>
      </nav>
      <div
        style={mobileMenuActive ? { display: 'block' } : { display: 'none' }}
        className='mobile-menu-links'
      >
        <ul>
          <li>
            <Link to='/'>Strona Główna</Link>
          </li>
          <li>
            <Link to='/shop'>Oferta</Link>
          </li>
          <li>
            <Link to='/'>Kontakt</Link>
          </li>
          <li>
            <Link to='/add-product'>Dodaj produkt</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default Layout;
