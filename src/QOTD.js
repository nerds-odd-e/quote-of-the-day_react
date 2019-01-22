import React, { Component } from 'react';

export default class QOTD extends Component {

    constructor(props) {
        super(props);
        this.quote = "";
    }
    fetchQuote() {
        this.quote = "THIS IS YS and JANE";
    }

    componentWillMount() {
        this.fetchQuote();
    }

    render() {
        return (
            <div>{this.quote}</div>
        );
    }
}