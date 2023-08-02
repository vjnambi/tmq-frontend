import React from 'react'
import axios from 'axios'
import BEDomain from '../lib/BEDomain'

function Test() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        sessionStorage.setItem("accessToken2",(await axios.post(`${BEDomain}/requestToken/1/1`)).data)
    }

    return <>
        <form method='post' onSubmit={handleSubmit}>
            <button type='submit'>Ready</button>
        </form>
    </>
}

export default Test