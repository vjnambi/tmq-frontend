import React from 'react'

function DisplayTitle({gameState}) {
    if(gameState){
        return <h4>{gameState.gameName}</h4>
    }
}

export default DisplayTitle