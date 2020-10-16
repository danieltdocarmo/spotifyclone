import React from 'react';

import { MdHome, MdSearch, MdLibraryMusic } from 'react-icons/md'

import './index.css';

import importPlaylists from '../../database/mockPlaylist';




export default function PlayerWeb() {
    const [playlists, setName] = React.useState(importPlaylists);

    return (

        <div className='playlist-container'>

            <aside className="playlist-aside">
                <ul className="playlist-aside-list">
                    <li className="playlist-aside-list-item"><MdHome className="playlist-aside-list-item-icon"/>Inicio</li>
                    <li className="playlist-aside-list-item"><MdSearch className="playlist-aside-list-item-icon"/>Buscar</li>
                    <li className="playlist-aside-list-item"><MdLibraryMusic className="playlist-aside-list-item-icon"/>Sua biblioteca</li>
                </ul>
            </aside>

            <main className="playlist-main">
                <div className="playlist-main-container">
                    <h6 className="playlist-main-container-title">Playlists para curtir no dia</h6>
                    <ul className="playlist-main-container-list">
                        {
                            playlists.map(playlist => {
                                return (
                                    <li className="playlist-main-container-list-item">
                                        <div className="list-item-image">
                                            <img src={playlist.cover} alt="cover" />
                                        </div>
                                        <h4 className="list-item-title">{playlist.title}</h4>
                                        <p className="list-item-description">{playlist.description}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </main>
        </div>

    );
}