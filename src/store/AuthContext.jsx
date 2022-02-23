import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext({ signUp: () => {}, logIn: () => {} });

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, user, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
