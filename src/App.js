import React, { Component } from 'react';
import Welcome from './Welcome';
import QuoteOfTheDay from './QuoteOfTheDay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <QuoteOfTheDay/>
      </div>
    );
  }
}

export default App;
