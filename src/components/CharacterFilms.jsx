import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmList from './FilmList';
import { CircularProgress } from '@material-ui/core';

function CharacterFilms(props){

    const [tam, setTam] = useState('');
    const [characterFilms, setCharacterFilms] = useState([]);
    const [error, setError] = useState('');

    useEffect(()=> {
        const fetchFilms = async () => {
            const { films } = props.location.state
            await films.map( async (film) => {
                await axios.get(film)
                .then(res => {
                    setTam(characterFilms.push(res.data))
                })
                .catch(err => {
                    setError(err)
                    console.log(error)
                });
            })
        }
        fetchFilms();
    },[])
    
    const { goBack } = props.history
    const { name } = props.match.params
    const { films } = props.location.state
    
    return (
        <div>
            <input
                type="button"
                className="btn btn-lg btn-secondary btn-block"
                onClick={()=> goBack()}
                value="Back"
            />
            
            <h1>{name} Films</h1>
            {characterFilms.length === films.length ?
                <FilmList
                    whereCome="Character"
                    whereGo="Characters"
                    films={characterFilms}
                />
                :
                <CircularProgress />
            }
        </div>
    );
}

export default CharacterFilms;