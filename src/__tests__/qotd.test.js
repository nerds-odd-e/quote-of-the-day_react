import { mount } from 'enzyme';
import React from 'react';
import wait from 'waait';
import gql from 'graphql-tag';
import { MockedProvider } from 'react-apollo/test-utils';
import QuoteOfTheDay from '../QuoteOfTheDay';

describe('QuoteOfTheDay conponent', () => {
    let wrapper;

    beforeEach(() => {
        var offset = new Date().getTimezoneOffset();
        const mocks = [
            {
              request: { query: gql`{getQuoteOfTheDay(timezoneOffset: ${offset}) { content originalAuthor submitter } }` },
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
        expect(wrapper.text()).toContain('Loading...');
    });

    it('must show the quote of the day after loading', async () => {
        await wait(0);
        expect(wrapper.text()).toContain('To read too many books is harmful');
        expect(wrapper.text()).toContain('By: Mao Zedong');
        expect(wrapper.text()).toContain('Submitted by: Terry');
    });

});
