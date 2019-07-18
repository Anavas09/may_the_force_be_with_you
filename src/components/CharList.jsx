import React, { Component } from 'react';
import Film from './Film';

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
                        genre: data.genre,
                        films: data.films
                    })
                })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Eye Color: {this.state.name}</p>
                <p>Genre: {this.state.name}</p>
            </div>
        );
    }
}

export default CharList;