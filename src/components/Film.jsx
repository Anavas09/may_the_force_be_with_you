import React from 'react';
import {
  Link
} from 'react-router-dom';

const Film = ({filmData, whereGo}) => {
    const { episode_id, title, director} = filmData
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
                    <Link to={`films/${episode_id}`}>
                        {whereGo}
                    </Link>
                }
            </div>
    );
};

export default Film;