import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import QuoteOfTheDay from '../QuoteOfTheDay';

import '../setupTests';

describe('Welcome Page', () => {
  xit('Welcome component has the right text', () => {
    const app = mount(<App />);
    expect(app.find('Welcome').text()).toEqual('Welcome Quote Seeker');
  });

  xit('should render QOTD component', () => {
    let app = mount(<App />);
    expect(app.containsMatchingElement(<QuoteOfTheDay />)).toEqual(true);
  });

});
