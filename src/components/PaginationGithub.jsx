import React, { Component } from 'react';
import Character from './Character';
import { CircularProgress } from '@material-ui/core';

class PaginationGithub extends Component {
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

  handleOnClickPageNumber = (e) => {
    console.log('click')
    this.setState({
      current_page: Number(e.target.id)
    }, () => console.log(this.state.current_page) );
    
    /*console.log(`pageNumber: ${pageNumber}`)
    const { characters } = this.props
    if(pageNumber !== 1){
      if(characters.length>10) {
        let charInit = characters.slice(0,10)
        let charUTen = characters.slice(charInit.length,characters.length)
        console.log(`charUTen: ${charUTen.length}`)
        this.setState({
          users: charUTen,
          total: characters.length,
          per_page: 10,
          current_page: pageNumber
        });
      }
    }else{
        let charInit = characters.slice(0,10)
        console.log(`charInit: ${charInit.length}`)
        this.setState({
            users: charInit,
            total: characters.length,
            per_page: 10,
            current_page: 1
        });
    }*/
  }

  handleOnClickChangePage = (text) => {
    console.log(text)
    const { current_page, per_page, characters } = this.state;
    if(text === "Previous"){
      if(current_page === 1){
        return null;
      }else{
        this.setState({
          current_page: current_page - 1
        })
      }
    }else{
      let lastNumber;
      for (let i = 1; i <= Math.ceil(characters.length / per_page); i++) {
        lastNumber = i;
      }
      if(current_page >= lastNumber){
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
      <div className="uk-child-width-1-3@m" uk-grid="true">
                {currentCharacters.map((character, i) => {
                    return (
                            <div key={`${i}_${character}`}>
                                <Character character={character}/>
                            </div>
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
          key={number}
          id={number}
          onClick={this.handleOnClickPageNumber}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul className="uk-pagination uk-flex-center" uk-margin="true">
        <li onClick={()=>this.handleOnClickChangePage('Previous')}><a href="#"><span uk-pagination-previous="true"></span> Previous</a></li>
          {renderPageNumbers}
          <li onClick={()=>this.handleOnClickChangePage('Next')}><a href="#">Next <span className="uk-margin-small-left" uk-pagination-next="true"></span></a></li>
        </ul>

        <div>
          {renderCharacters}
        </div>

        <ul className="uk-pagination uk-flex-center" uk-margin="true">
        <li onClick={()=>this.handleOnClickChangePage('Previous')}><a href="#"><span uk-pagination-previous="true"></span> Previous</a></li>
          {renderPageNumbers}
          <li onClick={()=>this.handleOnClickChangePage('Next')}><a href="#">Next <span className="uk-margin-small-left" uk-pagination-next="true"></span></a></li>
        </ul>
      </div>
    );
  }

}

export default PaginationGithub;