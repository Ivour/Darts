import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

const OptionsContext = createContext({
  setScoresOptions: () => {},
});

export const OptionsContextProvider = ({ children }) => {
  const [players, setPlayers] = useState(["ivo", "kubao"]);
  const [scores, setScores] = useState({
    Points: 501,
    Sets: 1,
    Legs: 3,
    Checkout: "single out",
  });

  function setPoints(val, label) {
    return setScores((prevState) => {
      return { ...prevState, [label]: val };
    });
  }

  const addPlayer = (user) => {
    return setPlayers((prevState) => [...prevState, user]);
  };
  const removePlayer = (user) => {
    return setPlayers((prevState) => prevState.filter((x) => x !== user));
  };

  /*  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    return signOut(auth);
  };
  const addUsername = (username) => {
    return updateProfile(auth.currentUser, { displayName: username });
  };
  const changePassword = (newPassword) => {
    return updatePassword(user, newPassword);
  }; */

  /* useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []); */
  console.log(scores, players);

  return (
    <OptionsContext.Provider
      value={{ scores, setPoints, addPlayer, players, removePlayer }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export const useOptionsContext = () => {
  return useContext(OptionsContext);
};
