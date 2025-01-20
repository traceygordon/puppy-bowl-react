import React from "react";
import { deletePlayer } from "../api";
// import { useState, useEffect } from "react";
// import { getPlayers } from "../api";

export default function SinglePlayer({ player }) {


  function handleDelete() {
    deletePlayer(player.id);
 
  }
  return (
    <div className="player-card">
      <img src={player.imageUrl} />
      <h1>{player.name}</h1>
      <h2>Breed: {player.breed}</h2>
      <h2>Status: {player.status}</h2>
      <button onClick={handleDelete} >Delete</button>
    </div>
  );
}
