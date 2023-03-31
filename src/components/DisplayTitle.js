import React from 'react'

function DisplayTitle({gameState}) {
    if(gameState){
        return <h2>{gameState.gameName}</h2>
    }
}

export default DisplayTitle