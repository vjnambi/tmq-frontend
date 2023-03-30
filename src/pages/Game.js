import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Join from '../components/Join';
import Answer from '../components/Answer';
import qs from "qs";
import { createBrowserHistory } from "history";
import Question from '../components/Question';

export async function loader({params}){
    const rawData = await axios.get(`https://thrensmusicquizapi.test.azuremicroservices.io/thrensmusicquizapi/default/readGame/${params.id}`)
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
        }
      }, []);
    
      useEffect(() => {
        if(playerId > 0){
            history.push(`?playerId=${playerId}`);
        }
      }, [playerId]);

    useEffect(() => {
        const sse = new EventSource(`https://thrensmusicquizapi.test.azuremicroservices.io/thrensmusicquizapi/default/subscribeGame/${gameId}`);
        sse.onmessage = e => {setGameState(JSON.parse(e.data))};

    }, [])

    return (
        <>
            <h2>{gameState.gameName}</h2>
            <Question gameState={gameState} />
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
            <Join gameState={gameState} playerId={playerId} setPlayerId={setPlayerId}/>
            <Answer gameState={gameState} playerId={playerId}/>
        </>
    )
}

export default Game