import React from 'react'

function SubmitGoToGame({gameId}) {
    if( gameId > 0){
        return <>
            <a href={`https://thrensmusicquiz.azurewebsites.net/game/${gameId}`}>
                <button>Go to Game</button>
            </a>
        </>
    }
}

export default SubmitGoToGame