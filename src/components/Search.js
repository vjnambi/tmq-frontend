import React, { useState } from 'react'

import axios from 'axios';
import BE2Domain from '../lib/BE2Domain'
import BEDomain from '../lib/BEDomain';


function Search({gameState, playerId}) {
    const [results, setResults] = useState("")

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
        console.log(e.target[0].id)
        var QData = JSON.parse((await axios.get(`${BE2Domain}/viewQuestions2/${e.target[0].id}`)).data)
        console.log(QData.questions)
        const body = {
            "payload": QData.questions
        }
        await axios.post(`${BEDomain}/addQuestionSet/${gameState.gameId}`, body)
    }

    if(gameState && (gameState.status === "lobby" && playerId > 0)){
        return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                Search and add a playlist
            </div>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} method='post' onSubmit={handleSubmit}>
                <input placeholder='Enter query' autoComplete='off'></input>
                <button type='submit'>Search</button>
            </form>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>{typeof results === 'string' ? results : results.map((n,i) => {
                return <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} key={i}>
                    <div>name: {n.name}</div>
                    <form method='post' onSubmit={handleSubmit2}>
                        <button id={n.id} type='submit'>Add Question Set</button>
                    </form>
                </div>})}
            </div>
        </div>
    }
}

export default Search