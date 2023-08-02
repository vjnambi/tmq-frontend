import React from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'

function GameLobbyJoinGameButton({gameState, setGameState, setPlayerId}) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        const tokenData = (await axios.post(`${BEDomain}/addPlayer/${gameState.gameId}`, body)).data
        sessionStorage.setItem("accessToken2",tokenData)

        const gameData = (await axios.get(`${BEDomain}/readGame/${gameState.gameId}`)).data
        setGameState(gameData)

        const body2 = {
            "payload": tokenData
        }
        const playerData = (await axios.post(`${BEDomain}/getPlayerId`, body2)).data
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