import SinglePlayer from "./SinglePlayer";
import { useEffect, useState } from "react";
import { getPlayers } from "../api";
import React from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getData() {
      const playerData = await getPlayers();
      setPlayers(playerData);
    }
    getData();
  }, []);

  return players.map((player) => {
    return <SinglePlayer key={players.id} player={player} />;
  });
}
