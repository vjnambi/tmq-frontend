import React from 'react'
import GameQuestionPlayerItem from './GameQuestionPlayerItem'

function GameQuestionPlayerContainer({gameState}) {
    return <div className='vflex' style={{alignItems:'center', gap: '0.1vh', alignSelf: 'stretch', flexGrow: 5, width: 0}}>
            {gameState.playerList.map(
                (n, i) => {
                    return <GameQuestionPlayerItem key={i} playerState={n} />
                }
            )}
    </div>
}

export default GameQuestionPlayerContainer