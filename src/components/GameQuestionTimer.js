import React from 'react'

function GameQuestionTimer({gameState}) {
    const embedUrl = `https://www.youtube.com/embed/${gameState.currentQuestion.url}?autoplay=1`
    return <>
        <div style={{flexGrow: 7}}>
        <div className='videoContainer'>
            <div className='contents' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color:'white', backgroundColor: 'black'}}>
                <div>{gameState.timeKeeper.time}</div>
            </div>
        </div>
        </div>
        <iframe className='hidden' width="560" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        
        
    </>
}

export default GameQuestionTimer