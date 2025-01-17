const BASE_API = `https://fsa-puppy-bowl.herokuapp.com/api/2409-GHP-ET-WEB-PT`

export async function getPlayers(){
    console.log("getPlayers")
    try {
        const response = await fetch(
          BASE_API + '/players'
        );
        const json = await response.json();
        const result = json.data;
        console.log(result.players)
        return result.players;
      } catch (err) {
        console.error(err);
      }

};

export function addPlayer(){

console.log(`addPlayer: ${addPlayer}`)
};

export function deletePlayer(playerId){


console.log(`deletePlayer: ${playerId}`)
};
