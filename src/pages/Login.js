import React from 'react'
import { useState } from 'react'
import BE2Domain from '../lib/BE2Domain'
import axios from 'axios'
import GlobalNavBar from '../components/GlobalNavBar'

export default function Login() {

    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            "username": e.target[0].value,
            "password": e.target[1].value
        }

        axios.post(`${BE2Domain}/login`, body).then((response) => {
            if(response.data.error){
                setText(response.data.error)
            } else {
                sessionStorage.setItem("accessToken",response.data)
                setText("Successfully logged in")
            }
        })
    }

    return <>
                <div className='background'>
                <GlobalNavBar />
                <div className='main'>
        <form method='post' onSubmit={handleSubmit}>
            <input placeholder='Enter username' autoComplete='off'></input>
            <input placeholder='Enter password' autoComplete='off' type='password'></input>
            <button type='submit'>Log in</button>
        </form>
        <div>{text}</div>
        </div>
        </div>
    </>
}
