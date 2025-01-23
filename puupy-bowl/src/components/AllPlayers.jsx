import SinglePlayer from "./SinglePlayer";
import { useEffect } from "react";
import React from "react";


export default function AllPlayers({getData, players}) {

  useEffect(() => {
   getData();
  }, []);





  return (
<div className="allPlayers">
{players.map((player) => 
 ( <SinglePlayer key={player.id} player={player} getData={getData}/>))}
    </div>
  )


};