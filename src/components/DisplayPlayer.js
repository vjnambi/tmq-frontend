import React from 'react'

function DisplayPlayer({gameState, playerState}) {
    if(gameState){
        if(playerState){
            if(gameState.status === "lobby"){
                return <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{playerState.name}</h5>
                            <div className='card-text'>Status: {playerState.status}</div>
                        </div>
                    </div>
                </div>
            } else if(gameState.status === "question" || gameState.status === "answer"){
                return <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}><div>{playerState.name}</div><div>{playerState.score}</div></h5>
                            <div className='card-text'>Answer: {gameState.status === "question" ? "???" : playerState.answer}</div>
                        </div>
                    </div>
                </div>
            } else if(gameState.status === "result"){
                return <div className='col-12'>
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
                return <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Join the game!</h5>
                        </div>
                    </div>
                </div>
            }
        }
    }
}

export default DisplayPlayer