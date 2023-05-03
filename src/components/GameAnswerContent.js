import React from 'react'
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
		<div>Question {gameState.currentQuestionNum}</div>
		<div className='hflex' style={{alignSelf: 'stretch', alignItems: 'stretch', gap: '0.2vw'}}>
			<GameAnswerVideo gameState={gameState} />
			<GameAnswerPlayerContainer gameState={gameState} />
		</div>
		<div>{gameState.currentQuestion.answer}</div>
		{controls}
	</>
}

export default GameAnswerContent