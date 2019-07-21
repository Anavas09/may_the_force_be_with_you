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

    async componentDidMount() {
        await this.fetchFilms()
    }

    fetchFilms = () => {
        const { whereCome } = this.props
        console.log(this.props)
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
            const { episode_id } = this.props.match.params
            console.log(episode_id)
            const url = `https://swapi.co/api/films/${episode_id}`
            //const { filmData } = this.props
            //console.log(filmData)
            axios.get(url)
                .then(res => {
                    this.setState({
                        filmData: res.data
                    },()=>console.log(this.state.filmData))
                })
                .catch(error => this.setState({ error }));
        }
    }

    render(){
        const { films, filmData } = this.state
        const { whereGo } = this.props
        return (
            <div>
                {whereGo === "Films" ?
                    <div>
                        {filmData ?
                            <div>
                                <Film
                                    filmData={filmData}
                                    whereGo={whereGo}
                                />
                            </div>
                            :
                            <CircularProgress/>
                        }
                    </div>
                :
                    <div>
                        {films.length > 0 ?
                            <div>
                                {films.map((film,i) => {
                                    return (
                                        <div key={`${i}_${film}`}>
                                            <Film
                                                filmData={film}
                                                whereGo={whereGo}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            <CircularProgress/>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default FilmList;