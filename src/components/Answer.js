import React from 'react'

import axios from 'axios'

function Answer({gameState, playerId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        await axios.post(`https://thrensmusicquizapi.test.azuremicroservices.io/thrensmusicquizapi/default/updatePlayerAnswer/${gameState.gameId}/${playerId}`, body)
    }

    if(playerId > 0){
        return <>
            <form method='post' onSubmit={handleSubmit}>
                <input name='playerAnswerInput' type={Text}></input>
                <button type='submit'>Answer</button>
            </form>
        </>
    }


}

export default Answer