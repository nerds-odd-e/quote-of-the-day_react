import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_QUOTE_OF_TODAY = gql`
  {
    getQuoteOfTheDay {
        content
         originalAuthor
         submitter
    }
  }
`;

const QuoteOfTheDay = () => (
  <Query query={GET_QUOTE_OF_TODAY}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
      <div>{data.getQuoteOfTheDay.content}</div>
      );
    }}
  </Query>
);

export default class QOTD extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <QuoteOfTheDay />
            </div>
        );
    }
}