import React, { Component } from 'react';
import Welcome from './Welcome';
import QOTD from './QOTD';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <QOTD content={"Quote from GraphQL endpoint"} />
      </div>
    );
  }
}

export default App;
