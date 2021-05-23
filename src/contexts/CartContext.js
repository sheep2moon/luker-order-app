import React, { useContext, useState } from 'react';

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const value = {
    cart,
    setCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
