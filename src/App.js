import React, { Component } from 'react';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import MovieList from './components/MovieList';
import Films from './components/FilmList';
import Character from './components/Character';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={HomePage}  />
          <Route  exact path='/caracter/list' component={MovieList}/>
          <Route exact path='/characters/:episode_id' component={Character} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
