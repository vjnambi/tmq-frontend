import React from 'react'

import axios from 'axios'

function SubmitCreateGame({gameId, setGameId}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const temp = (await axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/createGame`)).data;
        setGameId(temp);
        const body = {
            "payload": [
                {
                    "url": "HZvnP0svJzk",
                    "answer": "A Dream That is More Scarlet Than Red"
                },
                {
                    "url": "w279PjazOAw",
                    "answer": "A Soul as Red as a Ground Cherry"
                },
                {
                    "url": "zUvEHNW6y_A",
                    "answer": "Apparitions Stalk the Night"
                },
                {
                    "url": "-Gx6D-i2Fqo",
                    "answer": "Lunate Elf"
                },
                {
                    "url": "FG7flaqNFIY",
                    "answer": "Tomboyish Girl in Love"
                },
                {
                    "url": "XpPlPKWW1Y0",
                    "answer": "Shanghai Teahouse ~ Chinese Tea"
                },
                {
                    "url": "qefeBGGszRI",
                    "answer": "Shanghai Alice of Meiji 17"
                },
                {
                    "url": "ogtZZLPHqus",
                    "answer": "Voile, the Magic Library"
                },
                {
                    "url": "qUEPCSzOHmo",
                    "answer": "Locked Girl ~ the Girl's Secret Room"
                },
                {
                    "url": "cBWOIyKZ6is",
                    "answer": "The Maid and the Pocket Watch of Blood"
                },
                {
                    "url": "m1nRuWqW09Q",
                    "answer": "Lunar Clock ~ Luna Dial"
                },
                {
                    "url": "JZ1jgSkP0Oc",
                    "answer": "The Young Descendant of Tepes"
                },
                {
                    "url": "uQ1YJMvSKP8",
                    "answer": "Septette for the Dead Princess"
                },
                {
                    "url": "B_5o9nETAPE",
                    "answer": "The Centennial Festival for Magical Girls"
                },
                {
                    "url": "xcvouNwZbI0",
                    "answer": "U.N. Owen was Her?"
                },
                {
                    "url": "OQ5f49lDH7E",
                    "answer": "An Eternity that is More Transient than Scarlet"
                },
                {
                    "url": "xtv5YP_Hgzs",
                    "answer": "Crimson Tower ~ Eastern Dream"
                }
            ]
        };
        axios.post(`https://thrensmusicquizapi-thrensmusicquizapi.azuremicroservices.io/addQuestionSet/${temp}`, body)
    }

    if(gameId < 0){
        return <>
            <form onSubmit={handleSubmit} method="POST">
                <button type='submit'>Create Game</button>
            </form>
        </>
    }

    


}

export default SubmitCreateGame