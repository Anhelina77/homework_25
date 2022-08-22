import React, { useState } from 'react';
import { AuthContext } from './index';

export const AuthProvider = props => {
  const { children } = props;
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = val => {
    setIsAuth(val);
  };

  return <AuthContext.Provider value={{ isAuth, toggleAuth }}>{children}</AuthContext.Provider>;
};
