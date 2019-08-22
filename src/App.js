import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import FilmList from './components/FilmList';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import CharacterFilms from './components/CharacterFilms';

function App(){
  return (
    <Fragment>
      <Header />
      <div className="app container">
        <div className="row justify-content-center">
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage}  />
              <Route exact path='/films/:episode_id' component={FilmList} />
              <Route exact path='/films/:episode_id/characters' component={CharacterList} />
              <Route exact path='/films/:episode_id/character/:name/films' component={CharacterFilms} />
            </Switch>
          </Router>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
