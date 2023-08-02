import React from 'react'
import GameQuestionTimer from './GameQuestionTimer'
import GameQuestionPlayerContainer from './GameQuestionPlayerContainer'
import GameQuestionAnswerButton from './GameQuestionAnswerButton'

function GameQuestionContent({gameState, playerId, stompClient}) {
	let controls;
	if(playerId > 0){
		controls = <GameQuestionAnswerButton gameState={gameState} playerId={playerId} stompClient={stompClient}/>
	}
    return <>
		<div>Question {gameState.currentQuestionNum}</div>
		<div className='hflex' style={{alignSelf: 'stretch', alignItems: 'stretch', gap: '0.2vw'}}>
			<GameQuestionTimer gameState={gameState} />
			<GameQuestionPlayerContainer gameState={gameState} playerId={playerId} />
		</div>
		{controls}
    </>
}

export default GameQuestionContent