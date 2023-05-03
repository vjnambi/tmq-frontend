import React from 'react'
import GameLobbyPlayerItem from './GameLobbyPlayerItem'

function GameLobbyPlayerContainer({gameState}) {
    return <div className='hflex' style={{flexWrap: 'wrap', justifyContent:'center', alignItems:'center', gap: '0.5rem', alignSelf: 'stretch', flexGrow: 0}}>
            {gameState.playerList.map(
                (n, i) => {
                    return <GameLobbyPlayerItem key={i} playerState={n} />
                }
            )}
    </div>
}

export default GameLobbyPlayerContainer