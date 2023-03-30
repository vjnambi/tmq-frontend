import React from 'react'

function Question({gameState}) {
  if(gameState.status == "lobby"){

  } else if(gameState.status == "question"){
    return <>
        <div>{gameState.currentQuestion.url}</div>
    </>
  } else if(gameState.status == "answer"){
    return <>
        <div>{gameState.currentQuestion.url}</div>
        <div>{gameState.currentQuestion.answer}</div>
    </>
  } else if(gameState.status == "result"){

  } else {
    return <div>GAME HAS NO STATUS</div>
  }
}

export default Question