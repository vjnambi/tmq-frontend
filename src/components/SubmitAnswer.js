import React, { useState } from 'react'

import axios from 'axios'
import BEDomain from '../lib/BEDomain'

function SubmitAnswer({gameState, playerId}) {

    const [formEntry1, setFormEntry1] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        setFormEntry1("")
        await axios.post(`${BEDomain}/updatePlayerAnswer/${gameState.gameId}/${playerId}`, body)
    }

    if(gameState && (gameState.status === "question" && playerId > 0)){
        return <>
            <form method='post' onSubmit={handleSubmit}>
                <input placeholder='Enter your answer' autoComplete='off' value={formEntry1} onChange={e => {setFormEntry1(e.target.value)}}></input>
                <button type='submit'>Answer</button>
            </form>
        </>
    }


}

export default SubmitAnswer