import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import Film from './Film'

class FilmList extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: '',
            films: [],
            filmData: []
        }
    }

    componentDidMount() {
        this.fetchFilms()
    }

    fetchFilms = async () => {
        const url = 'https://swapi.co/api/films'
        await axios.get(url)
            .then(res => {
                const { results } = res.data
                this.setState({
                    filmData: results
                },()=> console.log(this.state.filmData))
            })
            .catch(error => this.setState({ error }),
            ()=> console.log(this.state.error));
    }

    render(){
        const { filmData } = this.state
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                {filmData.length > 0 ?
                    filmData.map(film => {
                        return (
                            <Film
                                key={film.url}
                                film={film}
                                whereGo={"Characters"}
                            />
                        )
                    })
                    :
                    <CircularProgress/>
                }
            </div>
        );
    }
}

export default FilmList;