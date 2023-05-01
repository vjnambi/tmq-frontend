import React from 'react'

import axios from 'axios'
import BEDomain from '../lib/BEDomain'

function SubmitUnready({gameState, playerId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "unready"
        }
        await axios.post(`${BEDomain}/updatePlayerStatus/${gameState.gameId}/${playerId}`, body)
    }

    if(gameState && (gameState.status === "lobby" || gameState.status === "answer")){
        if(gameState.questionPool.length === 0 && playerId > 0 && gameState.playerList[playerId-1] && gameState.playerList[playerId-1].status === "ready"){
            return <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>There must be at least one question in the pool</div>
                <form method='post' onSubmit={handleSubmit}>
                    <button type='submit'>Unready</button>
                </form>
            </div>
        }
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