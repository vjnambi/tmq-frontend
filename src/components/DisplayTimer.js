import React from 'react'

function DisplayTimer({gameState}) {
  if(gameState && (gameState.status === "question" || gameState.status === "answer")){
    return <div>{gameState.timeKeeper.time}</div>
  }
}

export default DisplayTimer