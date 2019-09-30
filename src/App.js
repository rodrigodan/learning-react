import React, {Component} from 'react';
// import logo from './logo.svg';

import {CardList} from './components/card-list/card-list.components';

import './App.css';

class App extends Component{

  constructor(){
    super();

    /* state is a component object*/
    this.state = {
     monsters: [],
     searchField: ''
   }
  }

  // life cycle methods - are called in different stages when these components are rendered;
  // componentDiMount life cycle method:

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render(){
    // destructing state:
    const { monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App"> 

      <input 
        type = 'search' 
        placeholder = 'search monsters' 
        onChange = { e => this.setState({searchField: e.target.value})} 
      />

      {/* the props is gonna be any parameter that pass in the CardList */}
      {/* then, if we say we have a props name */}
      {/* any atribute we create inside the CardList tag is gonna be props object atribute
      in the card list */}
      {/* also, it has some other atrbute called children  */}
      {/* this children is any element inside the tag CardList */}
      <CardList monsters = {filteredMonsters}>

        } 
      </CardList>

     
      </div>
    )
  }
}

export default App;