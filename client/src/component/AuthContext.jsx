import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
