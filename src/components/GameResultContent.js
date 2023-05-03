import React from 'react'
import GameResultPlayerContainer from './GameResultPlayerContainer'

function GameResultContent({gameState}) {
  	return <>
		<GameResultPlayerContainer gameState={gameState} />
    </>
}

export default GameResultContent