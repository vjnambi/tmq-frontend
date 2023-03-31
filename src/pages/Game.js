import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import JoinGame from '../components/JoinGame';
import SubmitAnswer from '../components/SubmitAnswer';
import qs from "qs";
import { createBrowserHistory } from "history";
import DisplayQuestion from '../components/DisplayQuestion';
import SubmitReady from '../components/SubmitReady';
import SubmitUnready from '../components/SubmitUnready';

export async function loader({params}){
    const rawData = await axios.get(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/readGame/${params.id}`)
    const gameData = rawData.data
    const gameId = params.id;
    return {gameData, gameId}
}

function Game() {

    const {gameData, gameId} = useLoaderData()

    const [gameState, setGameState] = useState(gameData)

    const [playerId, setPlayerId] = useState(-1)

    const history = createBrowserHistory();

    useEffect(() => {
        const filterParams = history.location.search.substr(1);
        const filtersFromParams = qs.parse(filterParams);
        if (filtersFromParams.playerId) {
          setPlayerId(Number(filtersFromParams.playerId));
        } else if(playerId > 0){
            history.push(`?playerId=${playerId}`);
        }
      }, [history.location.search,history, playerId]);
    

    useEffect(() => {
        const sse = new EventSource(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/subscribeGame/${gameId}`);
        sse.onmessage = e => {setGameState(JSON.parse(e.data))};

    })

    return (
        <>
            <h2>{gameState.gameName}</h2>
            <DisplayQuestion gameState={gameState} />
            <div>{gameState.timeKeeper.time}</div>

            {gameState.playerList.map(
                (n, i) => {
                    if(n != null){
                        return <>
                            <div>Name: {n.name}</div>
                            <div>Answer: {n.answer}</div>
                            <div>Score: {n.score}</div>
                        </>
                    } else {
                        return <></>
                    }
                }
            )}
            <JoinGame gameState={gameState} playerId={playerId} setPlayerId={setPlayerId}/>
            <SubmitAnswer gameState={gameState} playerId={playerId}/>
            <SubmitReady gameState={gameState} playerId={playerId} />
            <SubmitUnready gameState={gameState} playerId={playerId} />
        </>
    )
}

export default Game