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
        console.log(this.props.match)
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
            const url = `https://swapi.co/api/films/${episode_id}`
            //const { filmData } = this.props
            //console.log(filmData)
            axios.get(url)
                .then(res => {
                    this.setState({
                        filmData: res.data
                    },()=>console.log(this.state.filmData.url))
                })
                .catch(error => this.setState({ error }));
        }
    }

    render(){
        if (this.props.match){
            const { url } = this.props.match
            const { episode_id } = this.props.match.params
            const { filmData } = this.state
            return (
                <div>
                    { url === `/films/${episode_id}` ?
                        <div>
                            {filmData.url ?
                                <div className="cards">
                                    <Film
                                        filmData={filmData}
                                        whereGo={"Characters"}
                                    />
                                </div>
                                :
                                <CircularProgress/>
                            }
                        </div>:'ÑO'
                    }
                </div>
            );
        }else{
            const { whereGo } = this.props
            const { films, filmData } = this.state
            console.log(`URL: ${filmData.url}, whereGo: ${whereGo}`)
            return (
                <div>
                    <div>
                        {films.length > 0 ?
                            <div>
                                {films.map((film,i) => {
                                    return (
                                        <div className="cards" key={`${i}_${film}`}>
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
                </div>
            );
        }
    }
}

export default FilmList;