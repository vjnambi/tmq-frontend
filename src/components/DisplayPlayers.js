import React from 'react'

import DisplayPlayer from './DisplayPlayer'

function DisplayPlayers({gameState}) {
    if(gameState){
        return <div className='container'>
            <div className='row row-cols 1'>
            {gameState.playerList.map(
                (n, i) => {
                    return <DisplayPlayer key={i} gameState={gameState} playerState={n} />
                }
            )}
            </div>
        </div>
    }
}

export default DisplayPlayers