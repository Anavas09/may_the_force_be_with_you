import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Character from './Character';
import { CircularProgress } from '@material-ui/core';

class CharacterList extends Component {
    constructor(props){
        super(props)

        this.state = {
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
              const { characters } = res.data
              this.setState({
                  characters
              })
          })
          .catch(error => this.setState({ error }));
    }

    render() {
        const { characters } = this.state
        return (
            <Fragment>
                <h5>CharacterList Component</h5>
                {characters.length > 0 ?
                    <div className="uk-child-width-1-3@m" uk-grid="true">
                        {characters.map((character, i) => {
                            return (
                                <div key={`${i}_${character}`}>
                                    <Character character={character}/>
                                </div>
                            )
                        })
                        }
                    </div>
                    :
                    <CircularProgress/>
                }
            </Fragment>
        );
    }
}

export default CharacterList;