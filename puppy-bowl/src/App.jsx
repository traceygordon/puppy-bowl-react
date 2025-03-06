import "./App.css";
import AddPlayerForm from "./components/AddPlayerForm";
import AllPlayers from "./components/AllPlayers";
import { getPlayers } from "./api";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PlayerDetails from "./components/PlayerDetails";


function App() {
  const [players, setPlayers] = useState([]);

  async function getData() {
    const playerData = await getPlayers();
    setPlayers(playerData);
  }
  return (
    <>
      <div className="header">
        <h1>Welcome to the Puppy Bowl!</h1>
        <h2>Let's get ready to ruff-ble!</h2>
      </div>
      <AddPlayerForm getData={getData} />
     
    
        <Routes>
          <Route
            path="/"
            element={<AllPlayers getData={getData} players={players} />}
          />
          <Route path="/:id" element={<PlayerDetails key={window.location.pathname} />} />
        </Routes>
    
    </>
  );
}

export default App;
