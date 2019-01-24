import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import QuoteOfTheDay from '../QuoteOfTheDay';

import '../setupTests';

describe('Welcome Page', () => {
  it('should render QOTD component', () => {
    let app = shallow(<App />);
    expect(app.containsMatchingElement(<QuoteOfTheDay />)).toEqual(true);
  });

});
