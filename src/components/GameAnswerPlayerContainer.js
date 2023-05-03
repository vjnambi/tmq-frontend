import React from 'react'
import GameAnswerPlayerItem from './GameAnswerPlayerItem'

function GameAnswerPlayerContainer({gameState}) {
    return <div className='vflex' style={{alignItems:'center', gap: '0.1vh', alignSelf: 'stretch', flexGrow: 5, width: 0}}>
            {gameState.playerList.map(
                (n, i) => {
                    return <GameAnswerPlayerItem key={i} playerState={n} />
                }
            )}
    </div>
}

export default GameAnswerPlayerContainer