import React from 'react'
import GameQuestionTimer from './GameQuestionTimer'
import GameQuestionPlayerContainer from './GameQuestionPlayerContainer'
import GameQuestionAnswerButton from './GameQuestionAnswerButton'
import GameAnswerVideo from './GameAnswerVideo'
import GameAnswerPlayerContainer from './GameAnswerPlayerContainer'
import GameAnswerReadyButton from './GameAnswerReadyButton'

function GameAnswerContent({gameState, playerId}) {

	let controls;
	if(playerId > 0){
		if(gameState.playerList[playerId-1].status === 'unready'){
			controls = <GameAnswerReadyButton gameState={gameState} playerId={playerId} />
		} else {
			
		}
	}

	return <>
		<div className='hflex' style={{alignSelf: 'stretch', alignItems: 'stretch', gap: '0.2vw'}}>
			<GameAnswerVideo gameState={gameState} />
			<GameAnswerPlayerContainer gameState={gameState} />
		</div>
		{controls}
	</>
}

export default GameAnswerContent