import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';

import Base from './components/base';
import Home from './components/home'

ReactDOM.render(
  <Base>
  <BrowserRouter>
  <Switch>
      <Route path='/' component={Home}/>
  </Switch>
  </BrowserRouter>
  </Base>
  ,
  document.getElementById('root')
);
