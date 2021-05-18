import React, { useEffect, useState } from 'react';
import SingleProduct from '../components/SingleProduct';
import { projectFirestore } from '../firebase/config';
import '../styles/shopPage.scss';

const Shop = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection('products').onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, []);
  console.log(docs);
  return (
    <div className='shop-page-container'>
      <h1>Wyświetlanie wszystkich {docs.length} produktów</h1>
      <div className='shop-products-grid'>
        {docs.map((product) => (
          <SingleProduct key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
