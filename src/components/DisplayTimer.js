import React from 'react'

function DisplayTimer({gameState}) {
  if(gameState && gameState.currentQuestionNum >= 2 && (gameState.status === "question" || gameState.status === "answer")){
    return <div>APRIL FOOLS!</div>
  }
  if(gameState && (gameState.status === "question" || gameState.status === "answer")){
    return <div>{gameState.timeKeeper.time}</div>
  }
}

export default DisplayTimer