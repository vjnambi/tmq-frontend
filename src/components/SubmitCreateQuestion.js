import React, { useState } from 'react'
import axios from 'axios'
import BE2Domain from '../lib/BE2Domain'

function SubmitCreateQuestion({setQState, qsId}) {

    const [formEntry1, setFormEntry1] = useState("")
    const [formEntry2, setFormEntry2] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        var videoId = "";
        videoId = e.target[0].value;
        videoId = videoId.match("v=(.)*")[0].substring(2)
        const body = {
            "url": videoId,
            "answer": e.target[1].value
        }
        setFormEntry1("")
        setFormEntry2("")
        var temp = JSON.parse((await axios.post(`${BE2Domain}/createQuestion/${qsId}`, body, {headers: {accessToken: sessionStorage.getItem("accessToken")}})).data)
        setQState(temp)
    }

        return <>
            <form method='post' onSubmit={handleSubmit}>
                <input placeholder='Enter youtube url' autoComplete='off' value={formEntry1} onChange={e => setFormEntry1(e.target.value)}></input>
                <input placeholder='Enter correct answer' autoComplete='off' value={formEntry2} onChange={e => setFormEntry2(e.target.value)}></input>
                <button type='submit'>Add Question</button>
            </form>
        </>
}

export default SubmitCreateQuestion