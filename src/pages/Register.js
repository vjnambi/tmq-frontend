import React, { useState } from 'react'
import BE2Domain from '../lib/BE2Domain'
import axios from 'axios'

export default function Register() {

    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "username": e.target[0].value,
            "password": e.target[1].value
        }

        setText((await axios.post(`${BE2Domain}/register`, body)).data)
    }

    return <>
                <div className='background'>
                <div className='main'>
        <form method='post' onSubmit={handleSubmit}>
            <input placeholder='Enter username' autoComplete='off'></input>
            <input placeholder='Enter password' autoComplete='off' type='password'></input>
            <button type='submit'>Register</button>
        </form>
        <div>{text}</div>
        </div>
        </div>
    </>
}
