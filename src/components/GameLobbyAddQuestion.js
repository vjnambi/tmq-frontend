import React, { useState } from 'react'

import axios from 'axios';
import BEDomain from '../lib/BEDomain';

function GameLobbyAddQuestion({gameState, playerId}) {

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

    return <div className='card' style={{flexGrow: 1, marginRight: '0.5rem'}}>
        <div className='card-body'>
            <div className='vflex' style={{gap: '0.5rem'}}>
                <div style={{textAlign: 'center'}}>
                    Add a song
                </div>
                <form className='vflex' style={{gap: '0.5rem'}} method='post' onSubmit={handleSubmit}>
                    <input placeholder='Enter youtube url' autoComplete='off' value={formEntry1} onChange={e => setFormEntry1(e.target.value)}></input>
                    <input placeholder='Enter correct answer' autoComplete='off' value={formEntry2} onChange={e => setFormEntry2(e.target.value)}></input>
                    <button type='submit'>Add Question</button>
                </form>
            </div>
        </div>
    </div>
}

export default GameLobbyAddQuestion