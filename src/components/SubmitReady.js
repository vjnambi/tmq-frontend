import React from 'react'

import axios from 'axios'

function SubmitReady({gameState, playerId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "ready"
        }
        await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/updatePlayerStatus/${gameState.gameId}/${playerId}`, body)
    }

    if(gameState && (gameState.status === "lobby" || gameState.status === "answer")){
        if(playerId > 0 && gameState.playerList[playerId-1] && gameState.playerList[playerId-1].status === "unready"){
            return <>
                <form method='post' onSubmit={handleSubmit}>
                    <button type='submit'>Ready</button>
                </form>
            </>
        }
    }

    


}

export default SubmitReady