import React, { Component } from 'react';
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

    async componentDidMount(){
        await this.fetchCharacter()
    }

    fetchCharacter = () => {
      const { episode_id } = this.props.match.params
      const url = `https://swapi.co/api/films/${episode_id}`
      axios.get(url)
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
            <div>
                <h5>CharacterList Component</h5>
                {characters.length > 0 ?
                    <div>
                        {characters.map((character, i) => {
                            return (
                                <div key={`${i}_${character}`}>
                                    <Character character={character} match={this.props.match}/>
                                </div>
                            )
                            })
                        }
                    </div>
                    :
                    <CircularProgress/>
                }
            </div>
        );
    }
}

export default CharacterList;