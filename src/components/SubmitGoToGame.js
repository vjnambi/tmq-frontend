import React from 'react'
import FEDomain from '../lib/FEDomain'

function SubmitGoToGame({gameId}) {
    if( gameId > 0){
        return <>
            <a href={`${FEDomain}/game/${gameId}`}>
                <button>Go to Game</button>
            </a>
        </>
    }
}

export default SubmitGoToGame