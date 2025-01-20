import SinglePlayer from "./SinglePlayer";
import { useEffect } from "react";
import React from "react";

export default function AllPlayers({getData, players}) {


  useEffect(() => {
   getData();
  }, []);



  return players.map((player) => {
    return <SinglePlayer key={player.id} player={player} />;
  });
}
