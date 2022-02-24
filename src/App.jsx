import Game from "./components/game/Game";
import Navbar from "./components/layout/Navbar";
import GameSettings from "./components/game/game-settings/GameSettings";
import PastGames from "./components/stats/PastGames";
import Stats from "./components/stats/Stats";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/profile/Profile";
import ProfileSettings from "./components/profile/ProfileSettings";
import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./components/auth/Welcome";
import { useAuthContext } from "./store/AuthContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path={"options"} element={<GameSettings />} />
      <Route path={"games"} element={<PastGames />} />
      <Route path={"stats"} element={<Stats />} />
      <Route path={"game"} element={<Game />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile-settings" element={<ProfileSettings />} />
    </Routes>
  );
}

export default App;
