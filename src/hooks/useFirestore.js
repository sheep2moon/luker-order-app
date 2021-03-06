import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (userId, userCollection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection('users')
      .doc(userId)
      .collection(userCollection)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [userId, userCollection]);

  return { docs };
};

export default useFirestore;
