import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, setCart } = useCart();
  return (
    <div>
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
