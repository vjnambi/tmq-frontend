import React from 'react'

function DisplayQuestion({gameState}) {
  if(gameState && (gameState.status === "question")){
    const embedUrl = `https://www.youtube.com/embed/${gameState.currentQuestion.url}?autoplay=1`
    return <>
        <iframe className='hidden' width="560" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </>
  }
}

export default DisplayQuestion