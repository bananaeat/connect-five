import { Auth, API } from 'aws-amplify';
import { createGame } from '../graphql/mutations'

export async function handleCreateOnlineGame(setGameState, setPlayer){
    setGameState(2);
    const playerID = (await Auth.currentUserInfo()).id;
    try{
        const event = await API.graphql({ query: createGame, input: playerID});
        console.log(event);
    } catch (error) {
        console.log("Error: " + JSON.stringify(error));
    }
    setPlayer(1);
}

export function handleJoinOnlineGame(setGameState, setPlayer){
    setGameState(2);
}