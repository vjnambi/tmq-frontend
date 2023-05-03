import React from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'

function GameLobbyJoinGameButton({gameState, setGameState, setPlayerId}) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        const playerData = (await axios.post(`${BEDomain}/addPlayer/${gameState.gameId}`, body)).data
        const gameData = (await axios.get(`${BEDomain}/readGame/${gameState.gameId}`)).data
        setGameState(gameData)
        console.log(playerData)
        setPlayerId(playerData)
    }

    return <form method='post' onSubmit={handleSubmit}>
        <div className='hflex'>
            <input name='playerNameInput' placeholder='Enter your name...' autoComplete='off'></input>
            <button type='submit'>Join</button>
        </div>
    </form>

}

export default GameLobbyJoinGameButton