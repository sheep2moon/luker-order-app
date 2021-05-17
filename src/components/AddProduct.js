import React, { useRef, useState } from 'react';
import {
  projectStorage,
  timestamp,
  projectFirestore,
} from '../firebase/config';
import '../styles/addProduct.scss';

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [fileImg, setFileImg] = useState();
  const [productData, setProductData] = useState({});
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const isFeaturedRef = useRef();
  const collectionRef = projectFirestore.collection('products');

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setFileImg(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;
    const category = categoryRef.current.value;
    const isFeatured = isFeaturedRef.current.checked;

    const storageRef = projectStorage.ref(file.name);
    try {
      storageRef.put(file).on(
        'state_changed',
        () => {},
        () => {},
        async () => {
          const image = await storageRef.getDownloadURL();
          setProductData({
            addedAt: timestamp(),
            image,
            name,
            price,
            description,
            category,
            isFeatured,
          });
          console.log(productData);
          collectionRef
            .doc(productData.name)
            .set(productData)
            .then(() => console.log('product added'))
            .catch((err) => console.log(err));
        }
      );
    } catch (error) {
      console.log(error);
    }
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
            <input type='text' name='name' ref={nameRef} />
          </div>
          <div className='form-entry'>
            <label htmlFor='price'>Cena</label>
            <input type='text' name='price' ref={priceRef} />
          </div>
          <div className='form-entry'>
            <label htmlFor='description'>Opis</label>
            <input type='text' name='description' ref={descriptionRef} />
          </div>
          <div className='form-entry'>
            <label htmlFor='category'>Kategoria</label>
            <input type='text' name='category' ref={categoryRef} />
          </div>
          <div className='featured-checkbox'>
            <label htmlFor='featured'>Produkt wyróżniony?</label>
            <input type='checkbox' name='featured' ref={isFeaturedRef} />
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
