import React from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'


function GameAnswerReadyButton({gameState, playerId, stompClient}) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "ready",
            "auth": sessionStorage.getItem("accessToken2")
        }
        stompClient.send(`/app/updatePlayerStatus/${gameState.gameId}/${playerId}`,{"AUTHORIZATION": sessionStorage.getItem("accessToken2")},JSON.stringify(body))
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Ready</button>
        </form>
    </>
}

export default GameAnswerReadyButton