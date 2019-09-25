import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    /* state is a component object*/
    this.state = {
      string: 'Hello Rodrigo'
    }
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>

          {/* setState is a component function */}
          {/* setState comes with all properties we're gonna change in our state */}
          <button onClick = {() => this.setState({ string: 'Hello Rodrigo Gonçalves Daniel' })}>
            Change the text
          </button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
