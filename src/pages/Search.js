import React from 'react'
import { useState } from 'react'
import BE2Domain from '../lib/BE2Domain'
import axios from 'axios'

export default function Search() {

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

    return <>
                <div className='background'>
                <div className='container-lg main'>
        <form method='post' onSubmit={handleSubmit}>
            <input placeholder='Enter query' autoComplete='off'></input>
            <button type='submit'>Search</button>
        </form>
        <div>{typeof results === 'string' ? results : results.map((n,i) => {return <div key={i}><div>id: {n.id}</div><div>name: {n.name}</div></div>})}</div>
        </div>
        </div>
    </>
}
