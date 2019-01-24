import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import QuoteOfTheDay from '../QuoteOfTheDay';
import NavigateBar from '../NavigateBar';

import '../setupTests';

describe('Welcome Page', () => {

  it('should render QOTD component', () => {
    let app = shallow(<App />);
    expect(app.containsMatchingElement(<QuoteOfTheDay />)).toEqual(true);
  });

  it('should render NavigateBar component', () => {
    let app = shallow(<App />);
    expect(app.containsMatchingElement(<NavigateBar />)).toEqual(true);
  });

});
