import React from 'react';




export default function Playlist({ songsInformations }) {
    console.log(songsInformations)
    return (
        <div className="songs-playlist-container">
            <div className="interna">
                <ul>
                    {songsInformations.map((songInformation) =>{
                       return (<li key={songInformation.id}>
                           <audio controls>
                               <source src={songInformation.audio}/>
                           </audio>
                       </li>
                    )})}
                </ul>
            </div>
        </div>

    )
}