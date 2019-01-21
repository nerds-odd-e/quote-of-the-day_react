import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Welcome from '../Welcome';
import '../setupTests';

describe('Welcome Page', () => {
  it('Welcome component has the right text',() => {
    const app = mount(<App/>);
    expect(app.find('Welcome').length).toBe(1);
    expect(app.find('Welcome').text()).toEqual('Welcome Quote Seeker');
  });
});
