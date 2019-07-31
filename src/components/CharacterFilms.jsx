import React, { Component } from 'react';
import axios from 'axios';
import FilmList from './FilmList';
import { CircularProgress } from '@material-ui/core';

class CharacterFilms extends Component {
    constructor(props){
        super(props)

        this.state = {
            tam: '',
            characterFilms: [],
            error: ''
        }
    }

    componentDidMount() {
        this.fetchFilms()
    }

    fetchFilms = async () => {
        const { films } = this.props.location.state
        await films.map( async (film) => {
            await axios.get(film)
            .then(res => {
                this.setState({
                    tam: this.state.characterFilms.push(res.data)
                })
            })
            .catch(error => this.setState({ error }),
            ()=> console.log(this.state.error));
        })
    }

    render() {
        const { characterFilms } = this.state
        const { goBack } = this.props.history
        const { name } = this.props.match.params
        const { films } = this.props.location.state
        
        return (
            <div>
                <button
                    className="uk-button uk-button-secondary"
                    onClick={() => goBack()}
                > Back
                </button>
                
                <h1>{name} Films</h1>
                {characterFilms.length === films.length ?
                    <FilmList
                        whereCome="Character"
                        whereGo="Characters"
                        films={characterFilms}
                    />
                    :
                    <CircularProgress />
                }
            </div>
        );
    }
}

export default CharacterFilms;