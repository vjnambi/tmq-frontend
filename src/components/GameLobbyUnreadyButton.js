import React from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'


function GameLobbyUnreadyButton({gameState, playerId, stompClient}) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "unready"
        }
        stompClient.send(`/app/updatePlayerStatus/${gameState.gameId}/${playerId}`,{},JSON.stringify(body))
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Unready</button>
        </form>
    </>
}

export default GameLobbyUnreadyButton