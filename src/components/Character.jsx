import React, { Component } from 'react';
import CharList from './CharList';

class Character extends Component {
    constructor(props){
        super(props)

        this.state = {
            fr: []
        }
    }

    async componentDidMount(){
        await this.fetchCharacter()
    }

    fetchCharacter = () =>{
        const { episode_id } = this.props.match.params
        fetch(`https://swapi.co/api/films/${episode_id}`)
            .then(res => res.json())
                .then(data => {
                    this.setState({
                        fr: data.characters
                    })
                })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <h5>Character Component</h5>
                {this.state.fr.map(character => {
                    return (
                        <div key={character}>
                            <CharList char={character}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Character;