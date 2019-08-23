import React, { Fragment, useState } from 'react';
import Character from './Character';
import { CircularProgress } from '@material-ui/core';

function Characters(props){

  const [characters] = useState(props.characters)
  const [total] = useState(props.characters.length)
  const [per_page] = useState(10)
  const [current_page, setCurrent_Page] = useState(1)

  const handleOnClickPageNumber = (number) => {
    console.log('click')
    setCurrent_Page(number)
    console.log(`handleOnClickPageNumber: ${current_page}`) 
  }

  const handleOnClickChangePage = (text) => {
    console.log(text)
    if(text === "Previous"){
      if(current_page === 1){
        return null;
      }else{
        setCurrent_Page(current_page - 1)
      }
    }else{
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(total / per_page); i++) {
        pageNumbers.push(i);
      }
      if(current_page >= pageNumbers.length){
        return null;
      }else{
        setCurrent_Page(current_page + 1)
      }
    }
  }

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
        onClick={() => handleOnClickPageNumber(number)}
      >
        <button className="page-link" href="#">{number}</button>
      </li>
    );
  });

  const previous = current_page === 1 ?
    <li id="Previous" className="page-item disabled">
      <button type="button" className="btn btn-info mr-1">
        &laquo; Previous
      </button>
    </li>
    :
    <li id="Previous" className="page-item" onClick={()=>handleOnClickChangePage('Previous')}>
      <button type="button" className="btn btn-info mr-1">
        &laquo; Previous
      </button>
    </li> 

  const next = current_page === pageNumbers.length ?
    <li id="Next" className="page-item disabled">
      <button type="button" className="btn btn-info ml-1">
        Next &raquo;
      </button>
    </li>
    :
    <li id="Next" className="page-item" onClick={()=>handleOnClickChangePage('Next')}>
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

export default Characters;