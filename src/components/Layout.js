import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';
import '../styles/layout.scss';
import logoIcon from '../assets/logo.svg';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Layout = ({ children }) => {
  const { cart } = useCart();
  const { login, user } = useAuth();
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
        <Link to='/cart'>
          <div className='cart-icon'>
            <span>{cart.length}</span>
            <img src={cartIcon} alt='' width='50' />
          </div>
        </Link>
      </nav>
      {children}
    </>
  );
};

export default Layout;
