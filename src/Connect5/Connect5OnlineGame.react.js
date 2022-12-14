import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createGame } from '../graphql/mutations'

export async function handleCreateOnlineGame(setGameState, setPlayer){
    setGameState(2);
    const playerID = (await Auth.currentUserInfo()).attributes.sub;
    try{
        const event = await API.graphql(graphqlOperation(createGame, { playerID: playerID }));
        console.log(event);
    } catch (error) {
        console.log("Error: " + JSON.stringify(error));
    }
    setPlayer(1);
}

export function handleJoinOnlineGame(setGameState, setPlayer){
    setGameState(2);
}