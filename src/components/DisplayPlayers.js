import React from 'react'

import DisplayPlayer from './DisplayPlayer'

function DisplayPlayers({gameState, playerId, setPlayerId}) {
    if(gameState){
        return <div className='container'>
            <div className='row row-cols 4 g-1'>
            {gameState.playerList.map(
                (n, i) => {
                    return <DisplayPlayer key={i} gameState={gameState} playerState={n} playerId={playerId} setPlayerId={setPlayerId} />
                }
            )}
            </div>
        </div>
    }
}

export default DisplayPlayers