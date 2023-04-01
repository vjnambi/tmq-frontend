import React from 'react'

import axios from 'axios'

function SubmitCreateGame({gameId, setGameId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const temp = (await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/createGame`)).data;
        setGameId(temp);
        const body = {
            "payload": [
                {
                    "url": "dQw4w9WgXcQ",
                    "answer": "Never Gonna Give You Up"
                },
            ]
        };
        axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/addQuestionSet/${temp}`, body)
    }

    if(gameId < 0){
        return <>
            <form onSubmit={handleSubmit} method="POST">
                <button type='submit'>Create Game</button>
            </form>
        </>
    }

    


}

export default SubmitCreateGame