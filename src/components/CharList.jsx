import React, { Component } from 'react';
import FilmList from './FilmList';
import { CircularProgress } from '@material-ui/core';

class CharList extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            eyeColor: '',
            genre: '',
            films: []
        }
    }

    async componentDidMount(){
        await this.fetchTasks()
    }

    fetchTasks = () =>{
        const { char } = this.props
        fetch(char)
            .then(res => res.json())
                .then(data => {
                    this.setState({
                        name: data.name,
                        eyeColor: data.eye_color,
                        gender: data.gender,
                        films: data.films
                    })
                })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Eye Color: {this.state.eyeColor}</p>
                <p>Gender: {this.state.gender}</p>
                <div key={`123${this.state.name}`}>
                {this.state.films.length > 0 ?
                    <FilmList films={this.state.films} whereGo="Films"/>
                    : <CircularProgress />
                }
                </div>
            </div>
        );
    }
}

export default CharList;