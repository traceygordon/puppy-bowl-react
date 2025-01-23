import React from "react";
import { deletePlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function SinglePlayer({ player, getData }) {
  const navigate = useNavigate();

  function handleClicked() {
    navigate(`/${player.id}`);
  
  }

  async function handleDelete() {
    await deletePlayer(player.id);
    getData();
  }

  return (
    <div className="player-card">
      <img src={player.imageUrl} />
      <h1>{player.name}</h1>
      <h2>Breed: {player.breed}</h2>
      <h2>Status: {player.status}</h2>
      <button onClick={() => handleClicked()}>Details</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
