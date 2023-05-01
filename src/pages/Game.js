import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import SubmitAnswer from '../components/SubmitAnswer';
import qs from "qs";
import { createBrowserHistory } from "history";
import DisplayVideo from '../components/DisplayVideo';
import SubmitReady from '../components/SubmitReady';
import SubmitUnready from '../components/SubmitUnready';
import DisplayTitle from '../components/DisplayTitle';
import DisplayPlayers from '../components/DisplayPlayers';
import DisplayAnswer from '../components/DisplayAnswer';
import JoinGame from '../components/JoinGame';
import SubmitAddQuestion from '../components/SubmitAddQuestion';
import BEDomain from '../lib/BEDomain';
import Search from '../components/Search';

export async function loader({params}){
    const rawData = await axios.get(`${BEDomain}/readGame/${params.id}`)
    const gameData = rawData.data
    const gameId = params.id;
    return {gameData, gameId}
}

function Game() {

    const {gameData, gameId} = useLoaderData()

    const [gameState, setGameState] = useState(gameData)

    const [playerId, setPlayerId] = useState(-1)

    const [sse, setSse] = useState()

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
        if(sse){

        } else {
            console.log("sse connection opened");
            const temp = new EventSource(`${BEDomain}/subscribeGame/${gameId}`);
            temp.onmessage = e => {setGameState(JSON.parse(e.data))};
            setSse(temp)
        }
        

    }, [sse, gameId])

    return (
        <div className='background'>
        <div className='main'>
            <DisplayTitle gameState={gameState} />
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <DisplayVideo gameState={gameState} />
                            <DisplayAnswer gameState={gameState} />
                        </div>
                    </div>
                    <div className='col-5'>
                        <DisplayPlayers gameState={gameState} />
                    </div>
                </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <SubmitAddQuestion gameState={gameState} playerId={playerId} />
            <Search gameState={gameState} playerId={playerId} />
            </div>
            <JoinGame gameState={gameState} playerId={playerId} setPlayerId={setPlayerId} />
            <SubmitAnswer gameState={gameState} playerId={playerId}/>
            <SubmitReady gameState={gameState} playerId={playerId} />
            <SubmitUnready gameState={gameState} playerId={playerId} />
        </div>
        </div>
    )
}

export default Game