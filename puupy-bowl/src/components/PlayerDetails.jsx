import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPlayerId } from "../api";

export default function PlayerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState("");

  useEffect(() => {
    async function fetchPlayer(id){
        setPlayer(await getPlayerId(id))
    }
    fetchPlayer(id);
  }, []);

  return (
    <div className="player-card">
      <img src={player.imageUrl} />
      <h1>{player.name}</h1>
      <h2>Breed: {player.breed}</h2>
      <h2>Status: {player.status}</h2>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
