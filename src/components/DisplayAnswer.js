import React from 'react'

function DisplayAnswer({gameState}) {
    if(gameState && (gameState.status === "answer")){
        const embedUrl = `https://www.youtube.com/embed/${gameState.currentQuestion.url}?autoplay=1`
        return <>
            <iframe className='hidden' width="560" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div>{gameState.currentQuestion.answer}</div>
        </>
      }
}

export default DisplayAnswer