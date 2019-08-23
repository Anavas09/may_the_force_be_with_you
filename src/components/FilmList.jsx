import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import Film from './Film'

function FilmList(props){

    const [error, setError] = useState('');
    const [whereGo, setWhereGo] = useState('');
    const [filmData, setFilmData] = useState([]);

    useEffect(()=> {
        const fetchFilms = async () => {
            const { whereCome } = props
            if (whereCome === 'HomePage') {
                const url = 'https://swapi.co/api/films'
                await axios.get(url)
                    .then(res => {
                        const { results } = res.data
                        setFilmData(results)
                        setWhereGo('Characters')
                    })
                    .catch(err => {
                        setError(err)
                        console.log(error)
                    });
            } else {
                const { films, whereGo } = props
                setFilmData(films)
                setWhereGo(whereGo)
            }
        }
        fetchFilms();
    },[])

    return (
        <div className="col-12 p-5 row">
            {filmData.length > 0 ?
                filmData.map(film => {
                    return (
                        <Film
                            key={film.url}
                            film={film}
                            whereGo={whereGo}
                        />
                    )
                })
                :
                <CircularProgress/>
            }
        </div>
    );
}

export default FilmList;