import React from 'react'
import axios from "axios";

function JoinGame({gameState, playerId, setPlayerId}) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        setPlayerId((await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/addPlayer/${gameState.gameId}`, body)).data)
    }

    if(gameState && (gameState.status === "lobby" && playerId < 0)){
        return <>
            <form method='post' onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='row'>
                        <input name='playerNameInput' placeholder='Enter your name...'></input>
                    </div>
                    <div className='row'>
                        <button type='submit'>Join</button>
                    </div>
                </div>
            </form>
        </>
    }
}

export default JoinGame