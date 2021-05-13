import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  function login() {
    return auth.signInAnonymously();
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged in');
        setUser(user);
      } else {
        console.log('user logout');
      }
    });

    return unsub;
  }, []);

  const value = {
    user,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
