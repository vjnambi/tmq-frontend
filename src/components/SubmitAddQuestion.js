import React from 'react'

import axios from 'axios';

function SubmitAddQuestion({gameState, playerId}) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        var videoId = "";
        videoId = e.target[0].value;
        videoId = videoId.match("v=(.)*")[0].substring(2)
        const body = {
            "payload": [
                {
                    "url": videoId,
                    "answer": e.target[1].value 
                }
            ]
        }
        console.log(body)
        await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/addQuestion/${gameState.gameId}/`, body)
    }

    if(gameState && (gameState.status === "lobby" && playerId > 0)){
        return <>
            <form method='post' onSubmit={handleSubmit}>
                <input placeholder='Enter youtube url'></input>
                <input placeholder='Enter correct answer'></input>
                <button type='submit'>Add Question</button>
            </form>
        </>
    }
}

export default SubmitAddQuestion