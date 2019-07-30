import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Character extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            eye_color: '',
            gender: '',
            films: [],
            filmData: []
        }
    }

    componentDidMount(){
        this.fetchCharacter()
    }

    fetchCharacter = async () =>{
        const { character } = this.props
        await axios.get(character)
            .then(res => {
                const { name, eye_color, gender, films } = res.data
                this.setState({
                    name,
                    eye_color,
                    gender,
                    films
                }, () => {
                    this.state.films.map(async (film) => {
                        return (
                            await axios.get(film)
                            .then(res => {
                                this.setState({
                                    filmData: res.data
                                })
                            })
                        )
                    })
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        const { name, eye_color, gender, filmData } = this.state
        const url = 'https://swapi.co/api/films'
        return (
            <div>
                {filmData.url ?
                    <div>
                        <p>Name: {name}</p>
                        <p>Eye Color: {eye_color}</p>
                        <p>Gender: {gender}</p>
                        <div className="uk-card-footer">
                            <Link to={`${url}`} className="uk-button uk-button-secondary">
                                Films {filmData.length}
                            </Link>
                        </div>
                    </div>
                    :
                    <CircularProgress />
                }
            </div>
        );
    }
}

export default Character;