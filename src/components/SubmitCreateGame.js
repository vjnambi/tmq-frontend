import React from 'react'

import axios from 'axios'
import BEDomain from '../lib/BEDomain';

function SubmitCreateGame({gameId, setGameId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setGameId((await axios.post(`${BEDomain}/createGame`)).data);
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