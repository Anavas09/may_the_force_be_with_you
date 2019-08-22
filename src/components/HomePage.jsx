import React, { Fragment } from 'react';
import FilmList from './FilmList';

function HomePage(){
    return (
        <Fragment>
            HomePage Component
            <FilmList whereCome="HomePage" whereGo="Characters"/>
        </Fragment>
    );
}

export default HomePage;