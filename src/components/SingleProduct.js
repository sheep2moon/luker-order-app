import React from 'react';
import '../styles/singleProduct.scss';

const SingleProduct = ({ product }) => {
  return (
    <div className='single-product-container'>
      <div className='single-image'>
        <img src={product.image} alt='' />
      </div>
      <div className='single-info'>
        <p>{product.name}</p>
        <div className='single-price'>
          <p>{product.price} zł</p>
          <button>Do koszyka</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
