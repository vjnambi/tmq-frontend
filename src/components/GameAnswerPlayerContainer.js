import React from 'react'
import GameAnswerPlayerItem from './GameAnswerPlayerItem'

function GameAnswerPlayerContainer({gameState, playerId}) {
    const temparray = []
    const temparray2 = []
    for(let attr in gameState.playerMap){
        temparray.push(gameState.playerMap[attr])
    }    
    temparray.sort(function(a,b){return b.score - a.score})
    console.log(temparray)
    temparray2.push(gameState.playerMap[playerId])
    var cursor = 0
    while(temparray2.length < 4){
        if(temparray[cursor].id !== playerId){
            temparray2.push(temparray[cursor])
        }
        cursor++;
    }
    return <div className='vflex' style={{alignItems:'center', gap: '0.1vh', alignSelf: 'stretch', flexGrow: 5, width: 0}}>
            {temparray2.map(
                (n, i) => {
                    return <GameAnswerPlayerItem key={i} playerState={n} />
                }
            )}
    </div>
}

export default GameAnswerPlayerContainer