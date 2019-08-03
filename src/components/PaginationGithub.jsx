import React, { Component } from 'react';
import styles from '../App.module.css';
import Character from './Character';

class PaginationGithub extends Component {
    constructor(props){
        super(props)
    

        this.state = {
            users: null,
            total: null,
            per_page: null,
            current_page: 1
        }
    }


  componentDidMount() {
    this.changePageNumber(1);
  }


  changePageNumber = (pageNumber) => {
    /*const response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    */
    console.log(`pageNumber: ${pageNumber}`)
    const { characters } = this.props
    if(pageNumber !== 1){
        if (characters.length>10){
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
    }
    
    console.log(`Lenght: ${characters.length}`)
  }


  render() {
    let users, renderPageNumbers;
    if (this.state.users !== null) {
        console.log(this.state.users.length)
        users = <div className="uk-child-width-1-3@m" uk-grid="true">
                    {this.state.users.map((user, i) => {
                        return (
                                <div key={`${i}_${user}`}>
                                    <Character character={user}/>
                                </div>
                        )
                    })}
                </div>
    }

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? styles.active : '';

        return (
          <span key={number} className={classes} onClick={() => this.changePageNumber(number)}>{number}</span>
        );
      });
    }

    return (


      <div>
          <div>
            {users}
          </div>


        <div className={styles.pagination}>
          <span onClick={() => this.changePageNumber(1)}>&laquo;</span>
          {renderPageNumbers}
          <span onClick={() => this.changePageNumber(1)}>&raquo;</span>
        </div>

      </div>
    );
  }

}

export default PaginationGithub;