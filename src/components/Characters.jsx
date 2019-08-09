import React, { Component, Fragment } from 'react';
import Character from './Character';
import { CircularProgress } from '@material-ui/core';

class Characters extends Component {
  constructor(props){
    super(props)

    const { characters } = this.props

    this.state = {
      characters: characters,
      total: characters.length,
      per_page: 10,
      current_page: 1
    }
  }

  handleOnClickPageNumber = (number) => {
    console.log('click')
    this.setState({
      current_page: number
    }, () => console.log(`handleOnClickPageNumber: ${this.state.current_page}`) );
  }

  handleOnClickChangePage = (text) => {
    console.log(text)
    const { current_page, per_page, total } = this.state;
    if(text === "Previous"){
      if(current_page === 1){
        return null;
      }else{
        this.setState({
          current_page: current_page - 1
        })
      }
    }else{
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(total / per_page); i++) {
        pageNumbers.push(i);
      }
      if(current_page >= pageNumbers.length){
        return null;
      }else{
        this.setState({
          current_page: current_page + 1
        })
      }
    }
  }


  render() {
    const { current_page, characters, per_page, total } = this.state;

    // Logic for displaying characters
    const indexOfLastTodo = current_page * per_page;
    const indexOfFirstTodo = indexOfLastTodo - per_page;
    const currentCharacters = characters.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log(`indexOfLastTodo: ${indexOfLastTodo}`)
    console.log(`indexOfFisrtTodo: ${indexOfFirstTodo}`)
    console.log(`currentCharacters: ${currentCharacters.length}`)
    
    const renderCharacters = currentCharacters ?
      <div className="col-12 p-5 row">
        {currentCharacters.map((character, i) => {
            return (
              <Character key={`${i}_${character}`} character={character}/>
            )
        })}
      </div>
      :
      <CircularProgress />

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / per_page); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="page-item"
          key={number}
          id={number}
          onClick={() => this.handleOnClickPageNumber(number)}
        >
          <button className="page-link" href="#">{number}</button>
        </li>
      );
    });

    const previous = this.state.current_page === 1 ?
      <li id="Previous" className="page-item disabled" onClick={()=>this.handleOnClickChangePage('Previous')}>
        <button type="button" className="btn btn-info mr-1">
          &laquo; Previous
        </button>
      </li>
      :
      <li id="Previous" className="page-item" onClick={()=>this.handleOnClickChangePage('Previous')}>
        <button type="button" className="btn btn-info mr-1">
          &laquo; Previous
        </button>
      </li> 

    const next = this.state.current_page === pageNumbers.length ?
      <li id="Next" className="page-item disabled" onClick={()=>this.handleOnClickChangePage('Next')}>
        <button type="button" className="btn btn-info ml-1">
          Next &raquo;
        </button>
      </li>
      :
      <li id="Next" className="page-item" onClick={()=>this.handleOnClickChangePage('Next')}>
        <button type="button" className="btn btn-info ml-1">
          Next &raquo;
        </button>
      </li>

    return (
      <Fragment>
        <ul className="pagination mx-auto">
          {previous}
          {renderPageNumbers}
          {next}
        </ul>

        {renderCharacters}

        <ul className="pagination mx-auto">
          {previous}
          {renderPageNumbers}
          {next}
        </ul>
      </Fragment>
    );
  }

}

export default Characters;