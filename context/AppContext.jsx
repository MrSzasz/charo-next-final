import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const appContext = createContext();

export const useAppContext = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContext = ({ children }) => {
  const [userLogged, setUserLogged] = useState(null);

  const userLogin = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUserLogged(userCredentials);
    localStorage.setItem("userData", userCredentials);
  };
  
  const userLogOut = async () => {
    await signOut(auth);
    setUserLogged(null);
    localStorage.setItem("userData", null);
  };

  return (
    <appContext.Provider value={{ userLogged, userLogin, userLogOut }}>
      {children}
    </appContext.Provider>
  );
};