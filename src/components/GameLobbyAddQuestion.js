import React, { useState } from 'react'

import axios from 'axios';
import BEDomain from '../lib/BEDomain';

function GameLobbyAddQuestion({gameState, playerId, stompClient}) {

    const [formEntry1, setFormEntry1] = useState("")
    const [formEntry2, setFormEntry2] = useState("")
    const [added, setAdded] = useState([])



    const handleSubmit = async (e) => {
        e.preventDefault()
        setAdded(arr => [...arr, e.target[1].value])
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
        stompClient.send(`/app/addQuestionSet/${gameState.gameId}`,{},JSON.stringify(body))
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
                <div className='vflex' style={{gap: '0.5rem'}}>{added.map((n,i) => {
                    return <div className='hflex' style={{justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch'}} key={i}>
                        <div>{n}</div>
                        <div>Added!</div>
                    </div>})}
                </div>
            </div>
        </div>
    </div>
}

export default GameLobbyAddQuestion