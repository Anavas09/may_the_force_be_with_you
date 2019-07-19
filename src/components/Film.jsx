import React from 'react';
import {
  Link
} from 'react-router-dom';

const Film = ({film, whereGo}) => {
    const { episode_id, title, director} = film
    return (
            <div key={episode_id}>
                <p>{title}</p>
                <p>{episode_id}</p>
                <p>{director}</p>
                <Link to={`characters/${episode_id}`}>
                    {whereGo}
                </Link>
            </div>
    );
};

export default Film;