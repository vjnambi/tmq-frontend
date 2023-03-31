import React from 'react'

import axios from 'axios'

function SubmitUnready({gameState, playerId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "unready"
        }
        await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/updatePlayerStatus/${gameState.gameId}/${playerId}`, body)
    }

    if(gameState && (gameState.status === "lobby" || gameState.status === "answer")){
        if(playerId > 0 && gameState.playerList[playerId-1] && gameState.playerList[playerId-1].status === "ready"){
            return <>
                <form method='post' onSubmit={handleSubmit}>
                    <button type='submit'>Unready</button>
                </form>
            </>
        }
    }

    


}

export default SubmitUnready