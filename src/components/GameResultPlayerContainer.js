import React from 'react'
import GameResultPlayerItem from './GameResultPlayerItem'

function GameResultPlayerContainer({gameState}) {
    const temparray = []
    for(let attr in gameState.playerMap){
        temparray.push(gameState.playerMap[attr])
    }
    return <div className='vflex' style={{justifyContent:'center', alignItems:'stretch', gap: '0.5rem', alignSelf: 'stretch', flexGrow: 1}}>
            {temparray.map(
                (n, i) => {
                    return <GameResultPlayerItem key={i} playerState={n} />
                }
            )}
    </div>
}

export default GameResultPlayerContainer