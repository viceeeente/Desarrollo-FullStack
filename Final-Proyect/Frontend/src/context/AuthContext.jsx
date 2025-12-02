import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, token, rol) => {
    const userData = { username, token, rol };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isLoggedIn = !!user;
  const userName = user?.username || "";

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoggedIn,
      userName,
      rol: user?.rol
    }}>
      {children}
    </AuthContext.Provider>
  );
};
