import React from 'react'


function GameLobbyUnreadyButton({gameState, playerId, stompClient}) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": "unready",
            "auth": sessionStorage.getItem("accessToken2")
        }
        stompClient.send(`/app/updatePlayerStatus/${gameState.gameId}/${playerId}`,{"AUTHORIZATION": sessionStorage.getItem("accessToken2")},JSON.stringify(body))
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Unready</button>
        </form>
    </>
}

export default GameLobbyUnreadyButton