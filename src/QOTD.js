import React, { Component } from 'react';

export default class QOTD extends Component {
    render() {
        return (
            <div>{this.props.content}</div>
        );
    }
}