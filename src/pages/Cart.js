import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/cartPage.scss';

const Cart = () => {
  const { cart, setCart } = useCart();
  return (
    <div className='cart-container'>
      {cart.map((product) => (
        <div className='cart-item'>
          <img src={product.image} alt='' width='50' />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
