import React from 'react';
import { mount, shallow } from 'enzyme';
import Welcome from '../Welcome';
import '../setupTests';

describe('Welcome Page', () => {
  it('Welcome component has the right text',() => {
    const welcome = mount(<Welcome/>);
    expect(welcome.text()).toEqual('Welcome Quote Seeker');
  });
});
