import React, { Component } from 'react';
import ShoppingList from './shopping/shopping-list';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ShoppingList name="Mark"></ShoppingList>
      </div>
    );
  }
}

export default App;
