import React from 'react'
import GameAnswerVideo from './GameAnswerVideo'
import GameAnswerPlayerContainer from './GameAnswerPlayerContainer'
import GameAnswerReadyButton from './GameAnswerReadyButton'
import GameAnswerUnreadyButton from './GameAnswerUnreadyButton'

function GameAnswerContent({gameState, playerId, stompClient}) {

	let controls;
	if(playerId > 0){
		if(gameState.playerList[playerId-1].status === 'unready'){
			controls = <GameAnswerReadyButton gameState={gameState} playerId={playerId} stompClient={stompClient} />
		} else {
			controls = <GameAnswerUnreadyButton gameState={gameState} playerId={playerId} stompClient={stompClient} />
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