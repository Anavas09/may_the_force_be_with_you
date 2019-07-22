import React, { Component } from 'react';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import FilmList from './components/FilmList';
import CharacterList from './components/CharacterList';
import Nav from './nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <HashRouter>
          <Switch>
            <Route exact path='/' component={HomePage}  />
            <Route exact path='/films/:episode_id' component={FilmList} />
            <Route exact path='/films/:episode_id/characters' component={CharacterList} />
          </Switch>
        </HashRouter>
      </div>
      
    );
  }
}

export default App;
