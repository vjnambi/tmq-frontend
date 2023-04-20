import React from 'react'


function DisplayQuestions({QState}) {
    return QState.questions.map((n, i) => {
        return<div style={{display: 'flex', flexDirection: 'row'}}>
            <div>{n.url}</div>
            <div>{n.answer}</div>
        </div>
    })
}

export default DisplayQuestions