import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import qs from "qs";
import { createBrowserHistory } from "history";
import BEDomain from '../lib/BEDomain';
import GameLobbyContent from '../components/GameLobbyContent';
import GameQuestionContent from '../components/GameQuestionContent';
import GameAnswerContent from '../components/GameAnswerContent';
import GameResultContent from '../components/GameResultContent';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs'

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

    const [stompClient, setStompClient] = useState()

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
        if(stompClient){

        } else {
            var socket = new SockJS(`${BEDomain}/gs-guide-websocket`);
            var temp = Stomp.over(socket);
            console.log(temp)
            temp.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                temp.subscribe(`/topic/game/${gameId}`, function (gameState) {
                    setGameState(JSON.parse(gameState.body));
                });
            });
            setStompClient(temp);
        }
        

    }, [stompClient, gameId])

    let content;
    switch(gameState.status){
        case "lobby":
            content = <GameLobbyContent gameState={gameState} setGameState={setGameState} playerId={playerId} setPlayerId={setPlayerId}/>
            break;
        case "question":
            content =  <GameQuestionContent gameState={gameState} playerId={playerId} />
            break;
        case "answer":
            content = <GameAnswerContent gameState={gameState} playerId={playerId}/>
            break;
        case "result":
            content = <GameResultContent gameState={gameState} playerId={playerId} />
            break;
        default:
            content = <div>Game state unknown</div>
            break;
      }
    
    return <div className='background'>
        <div className='main'>
            {content}                
        </div>
        </div>
}

export default Game