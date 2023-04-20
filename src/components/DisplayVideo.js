import React from 'react'
import DisplayTimer from './DisplayTimer'

function DisplayVideo({gameState}) {
  if(gameState && (gameState.status === "question")){
    const embedUrl = `https://www.youtube.com/embed/${gameState.currentQuestion.url}?autoplay=1`
    return <>
        <div className='videoContainer'>
            <div className='video' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color:'white', backgroundColor: 'black'}}>
                <DisplayTimer gameState={gameState} />
            </div>
        </div>
        <iframe className='hidden' width="560" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        
        
    </>
  }
  if(gameState && (gameState.status === "answer")){
    const embedUrl = `https://www.youtube.com/embed/${gameState.currentQuestion.url}?autoplay=1`
    return <>
        <div className='videoContainer'>
            <iframe className='video' src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </>
  }
}

export default DisplayVideo