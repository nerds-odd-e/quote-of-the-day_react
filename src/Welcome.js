import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Welcome extends Component {
  render(){
    return(
      <Jumbotron>
        <h1>Welcome Quote Seeker</h1>
      </Jumbotron>
    );
  }
}
