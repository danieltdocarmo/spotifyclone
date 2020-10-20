import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import Base from './components/base';
import Home from './components/home';
import Registration from './components/registration';
import PlayerWeb from './components/playerWeb';
import Playlist from './components/playlist';
import Help from './components/help';


let songsInformations ;

const exportInformation = (songs) => {
  songsInformations = songs
}

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/playerweb' render={props => <PlayerWeb exportInformation={exportInformation} />}/>
        <Route path='/playlist'  render={props => <Playlist songsInformations={songsInformations}/>}/>
        <Route path="/help" component={Help}/>
      </Switch>
    </Base>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
