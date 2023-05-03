import React from 'react'

function GameLobbyView0Button({setLobbyView}) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLobbyView(0)
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Back to Lobby</button>
        </form>
    </>
}

export default GameLobbyView0Button