import React, { Component } from 'react';
import axios from 'axios';
import FilmList from './FilmList';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: '',
            error: '',
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
            .catch(error => this.setState({ error }));
    }

    async componentWillMount(){
        await this.fetchData();
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
                <FilmList whereCome={"HomePage"} whereGo={"Characters"}/>
            </div>
        );
    }
}

export default HomePage;