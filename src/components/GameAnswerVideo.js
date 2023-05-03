import React from 'react'

function GameAnswerVideo({gameState}) {
    const embedUrl = `https://www.youtube.com/embed/${gameState.currentQuestion.url}?autoplay=1`
    return <>
        <div style={{flexGrow: 7}}>
        <div className='videoContainer'>
            <iframe className='contents' width="560" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        </div>

        
        
    </>
}

export default GameAnswerVideo