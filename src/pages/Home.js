import React, { useState } from 'react'
import axios from "axios";


function Home() {

    const [gameId, setGameId] = useState(-1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGameId((await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/createGame`)).data);
    }
    if(gameId < 0){
        return <>
            <form onSubmit={handleSubmit} method="POST">
                <button type='submit'>Create Game</button>
            </form>
        </>
    } else {
        return <>
            <a href={`https://thrensmusicquiz.azurewebsites.net/game/${gameId}`}>
                <button>Go to Game</button>
            </a>
        </>
    }
}

export default Home