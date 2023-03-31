import React from 'react'

function DisplayQuestion({gameState}) {
  if(gameState && (gameState.status === "question" || gameState.status === "answer")){
    return <>
        <div>{gameState.currentQuestion.url}</div>
    </>
  }
}

export default DisplayQuestion