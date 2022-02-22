import { Fragment } from "react";
import Game from "./components/game/Game";
import Navbar from "./components/layout/Navbar";
import Startup from "./components/game/game-settings/Startup";
import PastGames from "./components/stats/PastGames";
import Stats from "./components/stats/Stats";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProfileSettings from "./components/auth/ProfileSettings";

function App() {
  /* return <Startup />; */
  /*  return <Game />; */
  /* return <PastGames />; */
  /*  return <Stats />; */
  /* return <Login />; */
  return <ProfileSettings />;
  /*  return <Signup />; */
}

export default App;
