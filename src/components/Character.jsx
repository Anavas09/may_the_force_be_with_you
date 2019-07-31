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
            <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
                            <div className="uk-card-body">
                                <p>Eye Color: {eye_color}</p>
                                <p>Gender: {gender}</p>
                            </div>
                            <div className="uk-card-footer">
                                <Link to={{
                                    pathname: `character/${name}`,
                                    state: {
                                        films
                                    }
                                }} className="uk-button uk-button-secondary">
                                    {films.length} Films
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <CircularProgress />
        );
    }
}

export default Character;