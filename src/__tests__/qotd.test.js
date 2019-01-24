import { mount } from 'enzyme';
import React from 'react';
import wait from 'waait';
import gql from 'graphql-tag';
import { MockedProvider } from 'react-apollo/test-utils';
import ReactSpinner from 'react-spinjs-fix';
import QuoteOfTheDay from '../QuoteOfTheDay';
import GET_QUOTE_OF_TODAY from '../queries'

describe('QuoteOfTheDay conponent', () => {
    let wrapper;
    const RealDate = Date;

    function mockDate(isoDate) {
      window.Date = class extends RealDate {
          constructor(...args) {
            if (args.length) return new RealDate(...args);
            return new RealDate(isoDate);
          }
        };
    }

    afterEach(() => {
      window.Date = RealDate;
    });

    beforeEach(() => {
        mockDate('1989-06-04');
        const mocks = [
            {
              request: {
                  query: GET_QUOTE_OF_TODAY,
                  variables: {date: "4-6-1989"},
              },
              result: {
                data: {
                    getQuoteOfTheDay: {
                        __typename: 'Quote',
                        content: "To read too many books is harmful.",
                        originalAuthor: "Mao Zedong",
                        submitter: "Terry",
                    }
                }
              }
            }
            ];
        wrapper = mount((
            <MockedProvider mocks={mocks}>
              <QuoteOfTheDay />
            </MockedProvider>
          ));
    });

    it('must let people know it is loading', async () => {
        expect(wrapper.containsMatchingElement(<ReactSpinner />)).toBeTruthy();
    });

    it('must show the quote of the day after loading', async () => {
        await wait(0);
        expect(wrapper.text()).toContain('To read too many books is harmful');
        expect(wrapper.text()).toContain('By: Mao Zedong');
        expect(wrapper.text()).toContain('Submitted by: Terry');
    });

});
