import React from 'react'
import JoinGame from './JoinGame'

function DisplayPlayer({gameState, playerState, playerId, setPlayerId}) {
    if(gameState){
        if(playerState){
            if(gameState.status === "lobby"){
                return <div className='col-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{playerState.name}</h5>
                            <div className='card-text'>Status: {playerState.status}</div>
                        </div>
                    </div>
                </div>
            } else if(gameState.status === "question" || gameState.status === "answer"){
                return <div className='col-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{playerState.name}</h5>
                            <div className='card-text'>Status: {playerState.status}</div>
                            <div className='card-text'>Answer: {gameState.status === "question" ? "???" : playerState.answer}</div>
                            <div className='card-text'>Score: {playerState.score}</div>
                        </div>
                    </div>
                </div>
            } else if(gameState === "result"){
                return <div className='col-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{playerState.name}</h5>
                            <div className='card-text'>Score: {playerState.score}</div>
                        </div>
                    </div>
                </div>
            }
        } else {
            if(gameState.status === "lobby"){
                return <div className='col-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Join the game!</h5>
                            <JoinGame gameState={gameState} playerId={playerId} setPlayerId={setPlayerId} />
                        </div>
                    </div>
                </div>
            }
        }
    }
}

export default DisplayPlayer