import React, { Component } from 'react';
import axios from 'axios'
import { CircularProgress } from '@material-ui/core';
import Film from './Film';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: '',
            films: []
        }
    }

    fetchData = () => {
        let url = 'https://swapi.co/api/films'
        axios.get(url)
            .then(res => {
                const { results } = res.data
                this.setState({
                    films: results
                })
            })
    }

    componentWillMount(){
        this.fetchData();
    }

    handleOnSelected = (id) => {
        this.setState({
            selected: id
        })
    }

    render() {
        return (
            <div>
                HomePage Component
                {this.state.films.length > 0 ?
                    <div>
                        {this.state.films.map(film => {
                            return (
                                <div key={film.episde_id}>
                                    <Film film={film} />
                                </div>
                            )
                        })
                        }
                    </div>
                    : <CircularProgress />
                }
            </div>
        );
    }
}

export default HomePage;