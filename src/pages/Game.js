import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import SubmitAnswer from '../components/SubmitAnswer';
import qs from "qs";
import { createBrowserHistory } from "history";
import DisplayQuestion from '../components/DisplayQuestion';
import SubmitReady from '../components/SubmitReady';
import SubmitUnready from '../components/SubmitUnready';
import DisplayTitle from '../components/DisplayTitle';
import DisplayTimer from '../components/DisplayTimer';
import DisplayPlayers from '../components/DisplayPlayers';
import DisplayAnswer from '../components/DisplayAnswer';
import JoinGame from '../components/JoinGame';

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
        <div className='background'>
        <div className='main'>
            <DisplayTitle gameState={gameState} />
            <DisplayQuestion gameState={gameState} />
            <DisplayAnswer gameState={gameState} />
            <DisplayTimer gameState={gameState} />
            <DisplayPlayers gameState={gameState} />
            <JoinGame gameState={gameState} playerId={playerId} setPlayerId={setPlayerId} />
            <SubmitAnswer gameState={gameState} playerId={playerId}/>
            <SubmitReady gameState={gameState} playerId={playerId} />
            <SubmitUnready gameState={gameState} playerId={playerId} />
        </div>
        </div>
    )
}

export default Game