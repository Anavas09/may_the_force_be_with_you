import React from 'react';
import { Link } from 'react-router-dom';


//RCC

const Film = (props) => {
    console.log(props)
    const { film, whereGo } = props
    const { episode_id, title, director } = film
    let { opening_crawl, url } = film
    opening_crawl = opening_crawl.substr(0, 100)
    url = url.substring(20, 28)
    return (
        <div>
            <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">{title}</h3>
                            <p className="uk-text-meta uk-margin-remove-top">Episodio {episode_id}</p>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{opening_crawl}</h3>
                    <p>Director {director}</p>
                    <div className="uk-card-footer">
                        { whereGo === 'Characters' ?
                            <Link to={`${url}/characters`} className="uk-button uk-button-secondary">
                                {whereGo}
                            </Link>
                            :
                            <Link to={`${url}`} className="uk-button uk-button-secondary">
                                {whereGo}
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Film;