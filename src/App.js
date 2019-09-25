import React, {Component} from 'react';
import logo from './logo.svg';
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

  render(){
    return(
      <div className="App">
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
      </div>
    )
  }
}

export default App;
