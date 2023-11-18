import React from 'react'
import FEDomain from '../lib/FEDomain'
import copyIcon from '../copy_icon.png'

function GameLobbyLink({gameState}) {
    const link = `${FEDomain}/game/${gameState.gameId}`

    const handleClick = async (e) => {
        navigator.clipboard.writeText(link)
    }

    return (
        <div className='card hflex' style={{padding: '0.5rem'}}  onClick={handleClick}>
            {link}
            <img src={copyIcon} alt='icon' style={{height: '1.5rem', width: '1.5rem', marginLeft: '.5rem'}}/>
        </div>
    )
}

export default GameLobbyLink