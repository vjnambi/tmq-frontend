import React from 'react'
import CreateGameButton from '../components/CreateGameButton';


function Home() {

    return <div className='background'>
        <div className='main'>
            <h2>Thren's Music Quiz</h2>
            <p>Thren's Music Quiz is a music quiz platform where users can play in and spectate music quiz battles. Players can participate in a battle where they listen to an audio excerpt from a pool of songs and guess the title of the song. Each correctly guessed song earns the player a point and the player with the most points at the end of the game is declared the winner.</p>
            <p>Use the Create button to create a game</p>
            <CreateGameButton />
        </div>
    </div>
}

export default Home