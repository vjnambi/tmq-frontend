import React from 'react'
import GameQuestionTimer from './GameQuestionTimer'
import GameQuestionPlayerContainer from './GameQuestionPlayerContainer'
import GameQuestionAnswerButton from './GameQuestionAnswerButton'

function GameQuestionContent({gameState, playerId}) {
	let controls;
	if(playerId > 0){
		controls = <GameQuestionAnswerButton gameState={gameState} playerId={playerId} />
	}
    return <>
		<div className='hflex' style={{alignSelf: 'stretch', alignItems: 'stretch', gap: '0.2vw'}}>
			<GameQuestionTimer gameState={gameState} />
			<GameQuestionPlayerContainer gameState={gameState} />
		</div>
		{controls}
    </>
}

export default GameQuestionContent