import React, { useState } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
import '../styles/addProduct.scss';

const AddProduct = () => {
  const [fileImg, setFileImg] = useState();
  const [productData, setProductData] = useState({});
  const collectionRef = projectFirestore.collection('products');

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setFileImg(URL.createObjectURL(file));

      const storageRef = projectStorage.ref(file.name);
      try {
        storageRef.put(file).on(
          'state_changed',
          () => {},
          () => {},
          async () => {
            const image = await storageRef.getDownloadURL();
            setProductData({ ...productData, image: image });
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    collectionRef
      .doc(productData.name)
      .set(productData)
      .then(() => console.log('product added'))
      .catch((err) => console.log(err));
  };

  return (
    <div className='add-product-container'>
      <form>
        <div className='form-first-column'>
          <div className='add-file'>
            <input
              type='file'
              name='file'
              onChange={(e) => handleFileChange(e)}
            />
            <span>Wybierz zdjęcie</span>
          </div>

          <div className='image-preview'>
            <img src={fileImg} alt='preview' />
          </div>
        </div>
        <div className='form-second-column'>
          <div className='form-entry'>
            <label htmlFor='name'>Nazwa produktu</label>
            <input
              type='text'
              name='name'
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
          </div>
          <div className='form-entry'>
            <label htmlFor='price'>Cena</label>
            <input
              type='text'
              name='price'
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
          </div>
          <div className='form-entry'>
            <label htmlFor='description'>Opis</label>
            <input
              type='text'
              name='description'
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            />
          </div>
          <div className='form-entry'>
            <label htmlFor='category'>Kategoria</label>
            <input
              type='text'
              name='category'
              onChange={(e) =>
                setProductData({ ...productData, category: e.target.value })
              }
            />
          </div>
          <div className='featured-checkbox'>
            <label htmlFor='featured'>Produkt wyróżniony?</label>
            <input
              type='checkbox'
              name='featured'
              onChange={(e) =>
                setProductData({ ...productData, featured: e.target.checked })
              }
            />
          </div>
          <button type='submit' onClick={(e) => handleSubmit(e)}>
            Dodaj
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
