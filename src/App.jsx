import { Fragment, useEffect, useState } from "react";
import Game from "./components/game/Game";
import Navbar from "./components/layout/Navbar";
import Startup from "./components/game/game-settings/GameSettings";
import PastGames from "./components/stats/PastGames";
import Stats from "./components/stats/Stats";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProfileSettings from "./components/auth/ProfileSettings";
import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./components/auth/Welcome";
import { useAuthContext } from "./store/AuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={user ? <Startup /> : <Welcome />} />
      <Route path={"options"} element={<Startup />} />
    </Routes>
  );
  /* return <Startup />; */
  /*  return <Game />; */
  /* return <PastGames />; */
  /*  return <Stats />; */
  /* return <Login />; */
  /* return <ProfileSettings />; */
  /*  return <Signup />; */
}

export default App;
