import React from 'react'

import axios from 'axios'

function SubmitAnswer({gameState, playerId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/updatePlayerAnswer/${gameState.gameId}/${playerId}`, body)
    }

    if(gameState && (gameState.status === "question" && playerId > 0)){
        return <>
            <form method='post' onSubmit={handleSubmit}>
                <input name='playerAnswerInput'></input>
                <button type='submit'>Answer</button>
            </form>
        </>
    }


}

export default SubmitAnswer