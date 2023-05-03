import React from 'react'
import logo from '../logo192.png'


function GameLobbyPlayerItem({playerState}) {
    if(playerState){
        return <div className='card' style={{width: '25rem', height: '5rem'}}>
                <div className='card-body'>
                    <div className='hflex' style={{justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%'}}>
                        <img style={{height: '3rem', paddingRight: '1rem'}} src={logo} alt='icon' />
                        <div style={{flexGrow: 1, textAlign: 'left', paddingRight: '1rem'}}>{playerState.name}</div>
                        <div style={{flexGrow: 1, textAlign: 'right'}}>{playerState.status}</div>
                    </div>
                </div>
            </div>
        
        
    } else {
        return<div className='card' style={{width: '25rem', height: '5rem'}}>
                <div className='card-body'>
                    <div className='hflex' style={{alignItems: 'center', width: '100%', height: '100%'}}>
                        <div>This spot is empty! Press "Join Game" to claim it!</div>
                    </div>
                </div>
            </div>
    }
}

export default GameLobbyPlayerItem