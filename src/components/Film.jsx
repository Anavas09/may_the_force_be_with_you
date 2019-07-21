import React from 'react';
import {
  Link
} from 'react-router-dom';


//RCC

const Film = (props) => {
    console.log(props)
    const { filmData, whereGo } = props
    const { episode_id, title, director } = filmData
    return (
            <div>
                <p>{title}</p>
                <p>{episode_id}</p>
                <p>{director}</p>
                { whereGo === 'Characters' ?
                    <Link to={`films/${episode_id}/characters`}>
                        {whereGo}
                    </Link>
                    :
                    <Link to={`/films/${episode_id}`}>
                        {whereGo}
                    </Link>
                }
            </div>
    );
};

export default Film;