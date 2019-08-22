import React from 'react';
import { Link } from 'react-router-dom';

function Film(props){
    const { film, whereGo } = props;
    const { episode_id, title, director } = film;
    let { opening_crawl, url } = film;
    opening_crawl = opening_crawl.substr(0, 100);
    url = url.substring(20, 28);

    const linkTo = whereGo === 'Characters' ?
        <Link to={`${url}/characters`} className="btn btn-secondary">
            {whereGo}
        </Link>
        :
        <Link to={`${url}`}
        className="btn btn-secondary">
            {whereGo}
        </Link>

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card border-warning">
                <h4 className="card-header">{title}</h4>
                <div className="card-body">
                    <h6 className="card-title">Episodio {episode_id}</h6>
                    <p className="card-text">{opening_crawl}</p>
                    <p className="card-subtitle text-muted">Director: {director}</p>
                    <div className="card-footer">
                        {linkTo}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Film;