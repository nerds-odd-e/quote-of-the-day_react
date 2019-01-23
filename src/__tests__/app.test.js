import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import QOTD from '../QOTD';

import '../setupTests';

describe('Welcome Page', () => {
  xit('Welcome component has the right text', () => {
    const app = mount(<App />);
    expect(app.find('Welcome').text()).toEqual('Welcome Quote Seeker');
  });

  xit('should render QOTD component', () => {
    let app = mount(<App />);
    expect(app.containsMatchingElement(<QOTD />)).toEqual(true);
  });

});
