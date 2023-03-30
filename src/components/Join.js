import React from 'react'
import axios from "axios";

function Join({gameState, playerId, setPlayerId}) {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        setPlayerId((await axios.post(`https://thrensmusicquizapi.test.azuremicroservices.io/thrensmusicquizapi/default/addPlayer/${gameState.gameId}`, body)).data)
    }

    if(gameState.status == "lobby" && playerId < 0){
        return <>
            <form method='post' onSubmit={handleSubmit}>
                <input name='playerNameInput' type={Text}></input>
                <button type='submit'>Join</button>
            </form>
        </>
    }
}

export default Join