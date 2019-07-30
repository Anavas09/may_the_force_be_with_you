import React, { Component, Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import FilmList from './components/FilmList';
import CharacterList from './components/CharacterList';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="uk-container">
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={HomePage}  />
                  <Route exact path='/films/:episode_id' component={FilmList} />
                  <Route exact path='/films/:episode_id/characters' component={CharacterList} />
              </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
      
    );
  }
}

export default App;
