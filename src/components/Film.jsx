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
            <div className="column card">
                <p className="films-card__name">{title}</p>
                <p className="films-card__username">{episode_id}</p>
                <p className="films-card__name">{director}</p>
                <div className="films-card__divider"></div>
                { whereGo === 'Characters' ?
                    <div>
                        <div>
                            <Link to={`/films/${episode_id}/characters`}>
                                {whereGo}
                            </Link>
                        </div>
                        <div>
                            <Link to={`/films/${episode_id}`}>
                                {whereGo}
                            </Link>
                        </div>
                    </div>
                    :
                    <Link to={`/films/${episode_id}`}>
                        {whereGo}
                    </Link>
                }
            </div>
    );
};

export default Film;