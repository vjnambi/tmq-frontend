import React from 'react'
import GameResultPlayerContainer from './GameResultPlayerContainer'

function GameResultContent({gameState, stompClient}) {
  	return <>
		<GameResultPlayerContainer gameState={gameState} />
    </>
}

export default GameResultContent