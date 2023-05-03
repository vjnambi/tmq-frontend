import React from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'


function GameAnswerReadyButton({gameState, playerId}) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "ready"
        }
        await axios.post(`${BEDomain}/updatePlayerStatus/${gameState.gameId}/${playerId}`, body)
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Ready</button>
        </form>
    </>
}

export default GameAnswerReadyButton