import React, { useState } from 'react'

import axios from 'axios';
import BE2Domain from '../lib/BE2Domain'


function GameLobbySearch({gameState, playerId, stompClient}) {
    const [results, setResults] = useState("")
    const [selected, setSelected] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "query": e.target[0].value
        }

        axios.post(`${BE2Domain}/searchQuestionSet`, body).then((response) => {
            setResults(response.data)
        })
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault()
        setSelected(arr => [...arr, e.target[0].id])
        var QData = JSON.parse((await axios.get(`${BE2Domain}/viewQuestions2/${e.target[0].id}`)).data)
        const body = {
            "payload": QData.questions
        }
        stompClient.send(`/app/addQuestionSet/${gameState.gameId}`,{},JSON.stringify(body))
    }

    return <div className='card' style={{flexGrow: 1}}>
    <div className='card-body'>
    <div className='vflex' style={{gap: '0.5rem'}}>
        <div style={{textAlign: 'center'}}>
            Search and add a playlist
        </div>
        <form className='vflex' style={{gap: '0.5rem'}} method='post' onSubmit={handleSubmit}>
            <input placeholder='Enter query' autoComplete='off'></input>
            <button type='submit'>Search</button>
        </form>
        <div className='vflex' style={{gap: '0.5rem'}}>{typeof results === 'string' ? results : results.map((n,i) => {
            const button = selected.includes(n.id) ? <button id={n.id} disabled type='submit'>Add Question Set</button> : <button id={n.id} type='submit'>Add Question Set</button>
            return <div className='hflex' style={{justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch'}} key={i}>
                <div>{n.name}</div>
                <form method='post' onSubmit={handleSubmit2}>
                    {button}
                </form>
            </div>})}
        </div>
    </div>
    </div>
    </div>
}

export default GameLobbySearch