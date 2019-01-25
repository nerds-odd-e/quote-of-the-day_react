import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Welcome from './Welcome';
import QuoteOfTheDay from './QuoteOfTheDay';
import NavigateBar from './NavigateBar';
import CreateQuoteForm from './CreateQuoteForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <NavigateBar>
              <Route path="/" exact component={QuoteOfTheDay} />
              <Route path="/create" component={CreateQuoteForm} />
        </NavigateBar>
      </div>
    );
  }
}

export default App;
