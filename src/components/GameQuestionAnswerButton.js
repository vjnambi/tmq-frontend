import React, {useState} from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'
function GameQuestionAnswerButton({gameState, playerId, stompClient}) {

    const [formEntry1, setFormEntry1] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "payload": e.target[0].value
        }
        setFormEntry1("")
        stompClient.send(`/app/updatePlayerAnswer/${gameState.gameId}/${playerId}`,{},JSON.stringify(body))
    }

    return <>
        <form className='hflex' method='post' onSubmit={handleSubmit}>
            <input placeholder='Enter your answer' autoComplete='off' value={formEntry1} onChange={e => {setFormEntry1(e.target.value)}}></input>
            <button type='submit'>Answer</button>
        </form>
    </>
}

export default GameQuestionAnswerButton