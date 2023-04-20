import React, { useState } from 'react'
import axios from 'axios'
import BE2Domain from '../lib/BE2Domain'
import { useLoaderData } from 'react-router-dom'
import SubmitCreateQuestionSet from '../components/SubmitCreateQuestionSet'
import DisplayQuestionSets from '../components/DisplayQuestionSets'

export async function loader(){
    var QSData = JSON.parse((await axios.get(`${BE2Domain}/viewQuestionSets`, {headers: {accessToken: sessionStorage.getItem("accessToken")}})).data)
    return {QSData}
}

function QuestionSets() {

    const {QSData} = useLoaderData()

    const [QSState, setQSState] = useState(QSData)

    if(QSState.error){
        return <>
            <div>{QSState.error.toString()}</div>
        </>
    } else {
        return <>
            <DisplayQuestionSets QSState={QSState} setQSState={setQSState} />
            <SubmitCreateQuestionSet setQSState={setQSState} />
        </>
    }
}

export default QuestionSets