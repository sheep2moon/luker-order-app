import { useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    storageRef.put(file);
  }, [file]);

  return;
};

export default useStorage;
