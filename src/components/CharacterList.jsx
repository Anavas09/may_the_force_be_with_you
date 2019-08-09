import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import Characters from './Characters';

class CharacterList extends Component {
    constructor(props){
        super(props)

        this.state = {
            movieTitle: '',
            characters: [],
            error: ''
        }
    }

    componentDidMount(){
        this.fetchCharacter()
    }

    fetchCharacter = async () => {
      const { episode_id } = this.props.match.params
      const url = `https://swapi.co/api/films/${episode_id}`
      await axios.get(url)
          .then(res => {
              const { characters, title } = res.data
              this.setState({
                  characters,
                  movieTitle: title
              })
          })
          .catch(error => this.setState({ error }));
    }

    render() {
        const { characters, movieTitle } = this.state
        return (
            <Fragment>
                <h3>{movieTitle} CharacterList Component</h3>
                <div className="col-12 p-5 row">
                    {characters.length > 0 ?
                        <Characters characters={characters} />
                        :
                        <CircularProgress/>
                    }
                </div>
            </Fragment>
        );
    }
}

export default CharacterList;