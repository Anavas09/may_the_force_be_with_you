import React from 'react';
import Film from './Film'

const FilmList = (props) => {
    console.log(props)
    const { films, whereGo } = props
    return (
        <div>
            {films.map(film => {
                return (
                    <div key={film}>
                        <Film film={film} whereGo={whereGo}/>
                    </div>
                )
            })}
        </div>
    );
}


export default FilmList;