import React, {Component} from 'react';
// import logo from './logo.svg';

import {CardList} from './components/card-list/card-list.components';

import './App.css';

class App extends Component{

  constructor(){
    super();

    /* state is a component object*/
    this.state = {
     monsters: [
      {
        name: 'Frankenstein',
        id: 'asc1'
      },
      {
        name: 'Dracula',
        id: 'asc2'
      },
      {
        name: 'zombie',
        id: 'asc3'
      }
    ]
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
    return(
      <div className="App">

      {/* the props is gonna be any parameter that pass in the CardList */}
      {/* then, if we say we have a props name */}
      {/* any atribute we create inside the CardList tag is gonna be props object atribute
      in the card list */}
      {/* also, it has some other atrbute called children  */}
      {/* this children is any element inside the tag CardList */}
      <CardList name = "Rodrigo" age = "24">
         {/* react needs to know what elements it need to update */}
        {/* if one of this elements in our array has a value that changes*/}
        {/* without that that, our jsx would need to re render everything every time */}
        {/* And that is heaaaavy */}
        {/* then, with monsters.key inside h1 */}
        {/* I can know what element changes and update just that instead of thousands */}
        {  
          this.state.monsters.map(monsters => (
            <h1 key = {monsters.id}> {monsters.name} </h1>
          )) 
        } 
      </CardList>

     
      </div>
    )
  }
}

export default App;
