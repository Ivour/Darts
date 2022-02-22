import { Fragment } from "react";
import Game from "./components/game/Game";
import Navbar from "./components/layout/Navbar";
import Startup from "./components/game/game-settings/Startup";
import PastGames from "./components/stats/PastGames";
import Stats from "./components/stats/Stats";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProfileSettings from "./components/auth/ProfileSettings";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/auth/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="options" element={<Startup />} />
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
