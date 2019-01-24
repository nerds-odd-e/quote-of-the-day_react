import gql from 'graphql-tag';

const GET_QUOTE_OF_TODAY = gql`
  query($date: String!){
    getQuoteOfTheDay(date: $date ) {
        content
         originalAuthor
         submitter
    }
  }
`;

export default GET_QUOTE_OF_TODAY;
