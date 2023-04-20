import React from 'react'
import FEDomain from '../lib/FEDomain'

function DisplayQuestionSets({QSState}) {
    return QSState.map((n, i) => {
        return<div style={{display: 'flex', flexDirection: 'row'}}>
            <div>{n.name}</div>
            <a href={`${FEDomain}/questions/${n.id}`}>
                <button>Edit Question Set</button>
            </a>
        </div>
    })
}

export default DisplayQuestionSets