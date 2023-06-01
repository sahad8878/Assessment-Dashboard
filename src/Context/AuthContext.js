import React, { createContext, useEffect, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userToken',userData.token);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('userToken');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
