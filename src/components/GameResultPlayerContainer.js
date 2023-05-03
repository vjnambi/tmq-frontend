import React from 'react'
import GameResultPlayerItem from './GameResultPlayerItem'

function GameResultPlayerContainer({gameState}) {
    return <div className='vflex' style={{justifyContent:'center', alignItems:'stretch', gap: '0.5rem', alignSelf: 'stretch', flexGrow: 1}}>
            {gameState.playerList.map(
                (n, i) => {
                    return <GameResultPlayerItem key={i} playerState={n} />
                }
            )}
    </div>
}

export default GameResultPlayerContainer