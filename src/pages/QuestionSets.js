import React, { useState } from 'react'
import axios from 'axios'
import BE2Domain from '../lib/BE2Domain'
import { useLoaderData } from 'react-router-dom'
import SubmitCreateQuestionSet from '../components/SubmitCreateQuestionSet'
import DisplayQuestionSets from '../components/DisplayQuestionSets'

export async function loader(){
    var QSData;
    if(sessionStorage.getItem("accessToken")){
        QSData = JSON.parse((await axios.get(`${BE2Domain}/viewQuestionSets`)).data)
    } else {
        QSData = null
    }
    
    return {QSData}
}

function QuestionSets() {

    const {QSData} = useLoaderData()

    const [QSState, setQSState] = useState(QSData)

    if(!QSState){
        return  <>
            <div>Not logged in</div>
        </>
    }else if(QSState.error){
        return <>
            <div>{QSState.error.toString()}</div>
        </>
    } else {
        return <>
            <div className='background'>
                <div className='main'>
                    <DisplayQuestionSets QSState={QSState} setQSState={setQSState} />
                    <SubmitCreateQuestionSet setQSState={setQSState} />
                </div>
            </div>
        </>
    }
}

export default QuestionSets