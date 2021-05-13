import React, { useState } from 'react';
import { projectStorage } from '../firebase/config';

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const productData = {
    image: null,
    name: null,
    price: null,
    description: null,
    category: null,
    isFeatured: null,
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storageRef = projectStorage.ref(file.name);
    try {
      storageRef.put(file);
      const url = await storageRef.getDownloadURL();
      productData.image = url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <h1>Zdjęcie produktu</h1>
        <input type='file' onChange={(e) => handleFileChange(e)} />
        <button type='submit' onClick={(e) => handleSubmit(e)}>
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
