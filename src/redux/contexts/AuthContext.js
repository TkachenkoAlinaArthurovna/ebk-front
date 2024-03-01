import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const router = useRouter();

  function parseJwt(token) {
    if (!token) {
      // Handle the case where the token is undefined
      console.error('Token is undefined');
      return null; // or any other appropriate action
    }

    const base64Url = token.split('.')[1];

    // Check if base64Url is defined
    if (!base64Url) {
      // Handle the case where base64Url is undefined
      console.error('Base64Url is undefined');
      return null; // or any other appropriate action
    }
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  }

  const login = (tempToken) => {
    setToken(tempToken);
    const user = parseJwt(tempToken);

    setUser(user);
    localStorage.setItem('token', tempToken);
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
    router.push('/');
  };

  const isAuthorized = () => {
    return user !== null;
  };

  const getUser = () => {
    return user;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      const user = parseJwt(token);
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isAuthorized, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
