import React, { useState } from 'react'

import axios from 'axios';
import BEDomain from '../lib/BEDomain';

function SubmitAddQuestion({gameState, playerId}) {

    const [formEntry1, setFormEntry1] = useState("")
    const [formEntry2, setFormEntry2] = useState("")


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
        setFormEntry1("")
        setFormEntry2("")
        await axios.post(`${BEDomain}/addQuestionSet/${gameState.gameId}`, body)
    }

    if(gameState && (gameState.status === "lobby" && playerId > 0)){
        return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                Add a song
            </div>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} method='post' onSubmit={handleSubmit}>
                <input placeholder='Enter youtube url' autoComplete='off' value={formEntry1} onChange={e => setFormEntry1(e.target.value)}></input>
                <input placeholder='Enter correct answer' autoComplete='off' value={formEntry2} onChange={e => setFormEntry2(e.target.value)}></input>
                <button type='submit'>Add Question</button>
            </form>
        </div>
    }
}

export default SubmitAddQuestion