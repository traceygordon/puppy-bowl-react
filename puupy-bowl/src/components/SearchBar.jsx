import React from "react";
import { useState } from "react";
import SinglePlayer from "./SinglePlayer";

export default function SearchBar({ players, getData }) {
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
}
