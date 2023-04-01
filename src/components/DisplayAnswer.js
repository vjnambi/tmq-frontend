import React from 'react'

function DisplayAnswer({gameState}) {
    if(gameState && (gameState.status === "answer")){
        return <>
            <div>{gameState.currentQuestion.answer}</div>
        </>
      }
}

export default DisplayAnswer