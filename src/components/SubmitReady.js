import React from 'react'

import axios from 'axios'
import BEDomain from '../lib/BEDomain'

function SubmitReady({gameState, playerId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "ready"
        }
        await axios.post(`${BEDomain}/updatePlayerStatus/${gameState.gameId}/${playerId}`, body)
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