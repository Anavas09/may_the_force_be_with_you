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
            whereGo: '',
            filmData: []
        }
    }

    componentDidMount() {
        this.fetchFilms()
    }

    fetchFilms = async () => {
        const { whereCome } = this.props
        if (whereCome === 'HomePage') {
            const url = 'https://swapi.co/api/films'
            await axios.get(url)
                .then(res => {
                    const { results } = res.data
                    this.setState({
                        filmData: results,
                        whereGo: 'Characters'
                    },()=> console.log(this.state.filmData))
                })
                .catch(error => this.setState({ error }),
                ()=> console.log(this.state.error));
        } else {
            const { films, whereGo } = this.props
            this.setState({
                filmData: films,
                whereGo
            },()=> console.log(this.state.filmData))
        }
    }

    render(){
        const { filmData, whereGo } = this.state
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                {filmData.length > 0 ?
                    filmData.map(film => {
                        return (
                            <Film
                                key={film.url}
                                film={film}
                                whereGo={whereGo}
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