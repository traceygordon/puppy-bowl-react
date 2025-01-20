import "./App.css";
import AddPlayerForm from "./components/AddPlayerForm";
import AllPlayers from "./components/AllPlayers";
import { getPlayers } from "./api";
import { useState } from "react";

function App() {
    const [players, setPlayers] = useState([]);

  async function getData() {
    const playerData = await getPlayers();
    setPlayers(playerData);
  }
  return (
    <>
      <AddPlayerForm getData={getData}/>
      <AllPlayers getData={getData} players={players}/>
    </>
  );
}

export default App;
