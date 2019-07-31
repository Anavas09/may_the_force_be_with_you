import React, { Component } from 'react';

class CharacterFilms extends Component {
    render() {
        console.log(this.props);
        const { goBack } = this.props.history
        const { name } = this.props.match.params
        return (
            <div>
                <button
                    className="uk-button uk-button-secondary"
                    onClick={() => goBack()}>Back</button>
                <h1>{name} Films</h1>
            </div>
        );
    }
}

export default CharacterFilms;