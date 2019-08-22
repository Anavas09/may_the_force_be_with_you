import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import Characters from './Characters';

function CharacterList(props){

    const [movieTitle, setMovieTitle] = useState('')
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchCharacter = async () => {
            const { episode_id } = props.match.params
            const url = `https://swapi.co/api/films/${episode_id}`
            await axios.get(url)
                .then(res => {
                    const { characters, title } = res.data
                    setCharacters(characters)
                    setMovieTitle(title)
                })
                .catch(err => {
                    setError(err)
                    console.log(error)
                });
        }
        fetchCharacter();
    })


    return (
        <Fragment>
            <h3>{movieTitle} CharacterList Component</h3>
            <div className="col-12 p-5 row">
                {characters.length > 0 ?
                    <Characters characters={characters} />
                    :
                    <CircularProgress/>
                }
            </div>
        </Fragment>
    );
}

export default CharacterList;