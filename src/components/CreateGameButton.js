import React from 'react'

import axios from 'axios'
import BEDomain from '../lib/BEDomain';
import FEDomain from '../lib/FEDomain';

function CreateGameButton() {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        window.location.href = `${FEDomain}/game/${(await axios.post(`${BEDomain}/createGame`)).data}`
    }

    return <>
        <form onSubmit={handleSubmit} method="POST">
            <button type='submit'>Create Game</button>
        </form>
    </>

}

export default CreateGameButton