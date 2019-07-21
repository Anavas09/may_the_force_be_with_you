import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import FilmList from './FilmList';

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

    async componentDidMount(){
        await this.fetchCharacter()
    }

    fetchCharacter = () =>{
        const { character } = this.props
        axios.get(character)
            .then(res => {
                const { name, eye_color, gender, films } = res.data
                this.setState({
                    name,
                    eye_color,
                    gender,
                    films
                }, () => {
                    this.state.films.map(film => {
                        return (
                            axios.get(film)
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
        return (
            <div>
                {filmData.url ?
                    <div>
                        <p>Name: {name}</p>
                        <p>Eye Color: {eye_color}</p>
                        <p>Gender: {gender}</p>
                        <h4>
                            <FilmList
                                filmData={filmData}
                                whereCome={"Characters"}
                                whereGo={"Films"}
                            />
                        </h4>
                        
                    </div>
                    :
                    <CircularProgress />
                }
            </div>
        );
    }
}

export default Character;