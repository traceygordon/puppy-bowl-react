const BASE_API = `https://fsa-puppy-bowl.herokuapp.com/api/2409-GHP-ET-WEB-PT`;

export async function getPlayers() {
  try {
    const response = await fetch(BASE_API + "/players");
    const json = await response.json();
    const result = json.data;
    return result.players;
  } catch (err) {
    console.error(err);
  }
}

export async function addPlayer(player) {
  try {
    const response = await fetch(BASE_API + "/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const json = await response.json();
    const result = json.data;
    console.log(result)
    return result;
  } catch (err) {
    console.error(err);
  }

}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(BASE_API + `/players/${playerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    const result = json.data;
    return result;
  } catch (err) {
    console.error(err);
  }
}
