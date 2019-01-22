import { mount } from 'enzyme';
import React from 'react';
import QOTD from '../QOTD';

describe('QOTD conponent', () => {

    it('should show the quote as EAT POO FUCK SLEEP', () => {
        let qotd = mount(<QOTD content={'EAT POO FUCK SLEEP'} />);
        expect(qotd.find('QOTD').text()).toEqual('EAT POO FUCK SLEEP');
    });

    it('should show the quote as LET USE XXX TO BE OUR VARIABLE NAME', () => {
        let qotd = mount(<QOTD content={'LET USE XXX TO BE OUR VARIABLE NAME'} />);
        expect(qotd.find('QOTD').text()).toEqual('LET USE XXX TO BE OUR VARIABLE NAME');
    });

});