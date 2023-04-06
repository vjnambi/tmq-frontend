import React, { useState } from 'react'
import SubmitCreateGame from '../components/SubmitCreateGame';
import SubmitGoToGame from '../components/SubmitGoToGame';


function Home() {


    const [gameId, setGameId] = useState(-1);
    return <div className='background'>
        <div className='main'>
            <SubmitCreateGame gameId={gameId} setGameId={setGameId} />
            <SubmitGoToGame gameId={gameId} />
        </div>
    </div>
}

export default Home