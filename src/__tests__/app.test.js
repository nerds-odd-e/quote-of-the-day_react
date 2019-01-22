import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

import '../setupTests';

describe('Welcome Page', () => {
  it('Welcome component has the right text', () => {
    const app = mount(<App />);
    expect(app.find('Welcome').text()).toEqual('Welcome Quote Seeker');
  });

  it('should render QOTD component', () => {
    let app = mount(<App />);
    expect(app.find('QOTD').length).toBe(1);
  });

});

