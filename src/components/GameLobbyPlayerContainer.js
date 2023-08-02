import React from 'react'
import GameLobbyPlayerItem from './GameLobbyPlayerItem'

function GameLobbyPlayerContainer({gameState}) {
    const temparray = []
    for(let attr in gameState.playerMap){
        temparray.push(gameState.playerMap[attr])
    }
    return <div className='hflex' style={{flexWrap: 'wrap', justifyContent:'center', alignItems:'center', gap: '0.5rem', alignSelf: 'stretch', flexGrow: 0}}>
            {temparray.map(
                (n, i) => {
                    return <GameLobbyPlayerItem key={i} playerState={n} />
                }
            )}
    </div>
}

export default GameLobbyPlayerContainer