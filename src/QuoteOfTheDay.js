import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactSpinner from 'react-spinjs-fix';
import GET_QUOTE_OF_TODAY from './queries'

function formatDate(date) {
    return ""+date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
}

const QuoteOfTheDay = () => (
  <Query query={GET_QUOTE_OF_TODAY} variables={{date: formatDate(new Date())}}>
    {({ loading, error, data }) => {
      if (loading) return <ReactSpinner />;
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
