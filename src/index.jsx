import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';

import Base from './components/base';
import Home from './components/home';
import Registration from './components/registration';

ReactDOM.render(
    <BrowserRouter>
      <Base>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/registration' component={Registration}/>
        </Switch>
      </Base>
    </BrowserRouter>
  ,
  document.getElementById('root')
);
