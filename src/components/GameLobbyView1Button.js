import React from 'react'

function GameLobbyView1Button({setLobbyView}) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLobbyView(1)
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Add Songs</button>
        </form>
    </>
}

export default GameLobbyView1Button