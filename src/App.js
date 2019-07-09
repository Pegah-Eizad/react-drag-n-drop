import React, { Component } from 'react';
import './App.css';
import ListContainer from './components/list-container';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ListContainer/>
        </header>
      </div>
    );
  }
  
}

export default App;
