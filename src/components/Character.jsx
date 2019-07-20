import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import FilmList from './FilmList';

class Character extends Component {
    constructor(props){
        super(props)

        this.state = {
            characterURL: '',
            name: '',
            eye_color: '',
            gender: '',
            films: []
        }
    }

    async componentDidMount(){
        await this.fetchCharacter()
    }

    fetchCharacter = () =>{
        const { character } = this.props
        axios.get(character)
            .then(res => {
                const { name, eye_color, gender, films, url } = res.data
                this.setState({
                    characterURL: url,
                    name,
                    eye_color,
                    gender,
                    films
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        const { name, eye_color, gender, films, characterURL  } = this.state
        return (
            <div>
                {films.length > 0 ?
                    <div>
                        <p>Name: {name}</p>
                        <p>Eye Color: {eye_color}</p>
                        <p>Gender: {gender}</p>
                        <FilmList
                            films={films}
                            whereCome={"Characters"}
                            whereGo={"Films"}
                            character={characterURL}/>
                    </div>
                    :
                    <CircularProgress />
                }
            </div>
        );
    }
}

export default Character;