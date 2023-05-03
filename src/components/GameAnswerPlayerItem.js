import React from 'react'
import logo from '../logo192.png'


function GameAnswerPlayerItem({playerState}) {
    if(playerState){
        return <div className='card' style={{width: '100%', height: '0', flexGrow: 1}}>
                <div className='card-body' style={{padding: '0.5vh', height: '100%'}}>
                    <div className='hflex' style={{justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%', fontSize: '2vw'}}>
                        <img style={{height: '100%', paddingRight: '0.8vw'}} src={logo} alt='icon' />
                        <div className='vflex' style={{flexGrow: 1}}>
                            <div className='hflex'>
                                <div style={{flexGrow: 1, textAlign: 'left', paddingRight: '0.8vw'}}>{playerState.name}</div>
                                <div style={{flexGrow: 1, textAlign: 'right'}}>{playerState.score}</div>
                            </div>
                            <div className='hflex'>
                                <div style={{flexGrow: 1, textAlign: 'left', paddingRight: '0.8vw'}}>Answer: {playerState.answer}</div>
                                <div style={{flexGrow: 1, textAlign: 'right'}}>{playerState.status}</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        
    } else {
        return <div style={{width: '100%', height: '0', flexGrow: 1}}></div>
    }
}

export default GameAnswerPlayerItem