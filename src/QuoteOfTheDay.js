import React from 'react';
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
      <div className={"quote-of-the-day"} id="quote-of-the-day">
      <div className={"content"}>{data.getQuoteOfTheDay.Quote}</div>
      <div className={"original-author"}>By: {data.getQuoteOfTheDay.Author}</div>
      <div className={"submitter"}>Submitted by: {data.getQuoteOfTheDay.Submitter}</div>
      </div>
      );
    }}
  </Query>
);

export default QuoteOfTheDay;
