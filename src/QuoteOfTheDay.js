import React from 'react';
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
      <div className={"quote-of-the-day"}>
      <div className={"content"}>{data.getQuoteOfTheDay.content}</div>
      <div className={"original-author"}>By: {data.getQuoteOfTheDay.originalAuthor}</div>
      <div className={"submitter"}>Submitted by: {data.getQuoteOfTheDay.submitter}</div>
      </div>
      );
    }}
  </Query>
);

export default QuoteOfTheDay;
