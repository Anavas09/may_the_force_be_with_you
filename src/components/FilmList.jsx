import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import Film from './Film'

class FilmList extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: '',
            films: []
        }
    }

    async componentDidMount() {
        await this.fetchFilms()
    }

    fetchFilms = () => {
        const { whereCome } = this.props
        if ( whereCome === "HomePage"){
            const url = 'https://swapi.co/api/films'
            axios.get(url)
                .then(res => {
                    const { results } = res.data
                    this.setState({
                        films: results
                    })
                })
                .catch(error => this.setState({ error }));
        }else {
            const { characterURL } = this.props
            axios.get(characterURL)
                .then(res => {
                    const { films } = res.data
                    this.setState({
                        films
                    })
                })
                .catch(error => this.setState({ error }));
        }
    }

    render(){
        const { films } = this.state
        const { whereGo } = this.props
        return (
            <div>
                {films.length > 0 ?
                    <div>
                        {films.map((film,i) => {
                            return (
                                <div key={`${i}_${film}`}>
                                    <Film filmData={film} whereGo={whereGo} />
                                </div>
                            )
                        })}
                    </div>
                    :
                    <CircularProgress/>
                }
            </div>
        );
    }
}

export default FilmList;