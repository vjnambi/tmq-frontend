import React, { useState } from 'react'
import axios from 'axios'
import BE2Domain from '../lib/BE2Domain'
import { useLoaderData } from 'react-router-dom'
import DisplayQuestions from '../components/DisplayQuestions'
import SubmitCreateQuestion from '../components/SubmitCreateQuestion'
import GlobalNavBar from '../components/GlobalNavBar'

export async function loader({params}){
    var QData = JSON.parse((await axios.get(`${BE2Domain}/viewQuestions/${params.qsId}`, {headers: {accessToken: sessionStorage.getItem("accessToken")}})).data)
    return {QData}
}

function Questions() {

    const {QData} = useLoaderData()

    const [QState, setQState] = useState(QData)

    if(QState.error){
        return <>
            <div>{QState.error.toString()}</div>
        </>
    } else {
        return <>
            <div className='background'>
            <GlobalNavBar />
                <div className='main'>
                    <DisplayQuestions QState={QState} setQState={setQState}/>
                    <SubmitCreateQuestion setQState={setQState} qsId={QState.id} />
                </div>
            </div>
        </>
    }
}

export default Questions