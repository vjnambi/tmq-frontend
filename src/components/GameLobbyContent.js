import React, {useState} from 'react'
import GameLobbyPlayerContainer from './GameLobbyPlayerContainer'
import GameLobbyJoinGameButton from './GameLobbyJoinGameButton'
import GameLobbyView1Button from './GameLobbyView1Button';
import GameLobbyReadyButton from './GameLobbyReadyButton';
import GameLobbyUnreadyButton from './GameLobbyUnreadyButton';
import GameLobbyView0Button from './GameLobbyView0Button';
import GameLobbyAddQuestion from './GameLobbyAddQuestion';
import GameLobbySearch from './GameLobbySearch';
import GameLobbyLink from './GameLobbyLink';

function GameLobbyContent({gameState, setGameState, playerId, setPlayerId, stompClient}) {

    const [lobbyView, setLobbyView] = useState(0)

    let controls;

    if(lobbyView === 0){
        if(playerId < 0){
            controls = <>
            <GameLobbyLink gameState={gameState}/>
            <GameLobbyJoinGameButton gameState={gameState} setGameState={setGameState} setPlayerId={setPlayerId} />
            </>
        } else {
            if(gameState.playerMap[playerId].status === 'unready'){
                if(gameState.questionPool.length === 0){
                    controls = <>
                    <GameLobbyLink gameState={gameState}/>
                    <GameLobbyView1Button setLobbyView={setLobbyView} />
                    </>
                } else {
                    controls = <>
                        <GameLobbyLink gameState={gameState}/>
                        <GameLobbyView1Button setLobbyView={setLobbyView} />
                        <GameLobbyReadyButton gameState={gameState} playerId={playerId} stompClient={stompClient} />
                    </>
                }
                
            } else {
                controls = <GameLobbyUnreadyButton gameState={gameState} playerId={playerId} stompClient={stompClient} />
            }
            
        }
        return <>
            <h4 style={{textAlign: 'center'}}>{gameState.gameName}</h4>
            <GameLobbyPlayerContainer gameState={gameState} />
            <div className='hflex' style={{justifyContent: 'space-evenly', alignSelf: 'stretch'}}>
                {controls}
            </div>
        </>
    } else {
        return <>
            <div className='hflex' style={{justifyContent: 'space-evenly', alignSelf: 'stretch'}}>
                <GameLobbyAddQuestion gameState={gameState} playerId={playerId} stompClient={stompClient} />
                <GameLobbySearch gameState={gameState} playerId={playerId} />
            </div>
            <GameLobbyView0Button setLobbyView={setLobbyView} />
        </>
    }
}

export default GameLobbyContent