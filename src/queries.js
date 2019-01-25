import gql from 'graphql-tag';

const GET_QUOTE_OF_TODAY = gql`
  query($date: String!){
    getQuoteOfTheDay(Date: $date ) {
        Quote
    }
  }
`;

export default GET_QUOTE_OF_TODAY;
