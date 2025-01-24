import SinglePlayer from "./SinglePlayer";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";


export default function AllPlayers({getData, players}) {






  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  function filteredPlayers() {
    if (!query) {
      return players;
    }
    return players.filter((player) => player.name.includes(query));
  }

  useEffect(() => {
    getData();
   }, []);

  return (
    <>
      <div>
        <label>Search:</label>
        <input type="text" onChange={handleSearch} value={query} />
      </div>
  <div>
        {filteredPlayers().map((player) => (
          <SinglePlayer key={player.id} player={player} getData={getData} />
        ))}
      </div>  
    </>
  );
};

