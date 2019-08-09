import React, { Component } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Character extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            eye_color: '',
            gender: '',
            films: [],
            filmData: []
        }
    }

    componentDidMount(){
        this.fetchCharacter()
    }

    fetchCharacter = async () =>{
        const { character } = this.props
        await axios.get(character)
            .then(res => {
                const { name, eye_color, gender, films } = res.data
                this.setState({
                    name,
                    eye_color,
                    gender,
                    films
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        const { name, eye_color, gender, films } = this.state
        return (
            films.length > 0 ?
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card border-primary">
                    <h4 className="card-header">{name}</h4>
                    <div className="card-body">
                        <p className="card-text">Eye Color: {eye_color}</p>
                        <p className="card-text">Gender: {gender}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={{
                            pathname: `character/${name}/films`,
                            state: {
                                films
                            }
                        }} className="btn btn-secondary">
                            <span className="badge badge-primary badge-pill">
                            {films.length}</span> Films
                        </Link>
                    </div>
                </div>
            </div>
            :
            <CircularProgress />
        );
    }
}

export default Character;