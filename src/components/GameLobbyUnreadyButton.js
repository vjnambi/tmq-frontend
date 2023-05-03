import React from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'


function GameLobbyUnreadyButton({gameState, playerId}) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "unready"
        }
        await axios.post(`${BEDomain}/updatePlayerStatus/${gameState.gameId}/${playerId}`, body)
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Unready</button>
        </form>
    </>
}

export default GameLobbyUnreadyButton