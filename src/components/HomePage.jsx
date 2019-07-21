import React, { Component } from 'react';
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