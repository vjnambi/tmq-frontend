import React, { useState } from 'react'
import axios from 'axios'
import BE2Domain from '../lib/BE2Domain'

function SubmitCreateQuestionSet({setQSState}) {

    const [formEntry1, setFormEntry1] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "name": e.target[0].value
        }
        setFormEntry1("")
        var temp = JSON.parse((await axios.post(`${BE2Domain}/createQuestionSet`, body, {headers: {accessToken: sessionStorage.getItem("accessToken")}})).data)
        setQSState(temp)
    }


    return <>
        <form method='post' onSubmit={handleSubmit}>
            <input placeholder='Name your question set' value={formEntry1} onChange={e => setFormEntry1(e.target.value)}></input>
            <button type='submit'>Create Question Set</button>
        </form>
    </>
}

export default SubmitCreateQuestionSet