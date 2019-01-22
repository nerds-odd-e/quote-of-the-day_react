import { mount, shallow } from 'enzyme';
import React from 'react';
import QOTD from '../QOTD';

describe('QOTD conponent', () => {
    let qotd;

    beforeEach(() => {
        qotd = shallow(<QOTD />).instance();
    });

    it('call fetch QOTD', () => {
        let spy = spyOn(qotd, 'fetchQuote');
        qotd.componentWillMount();
        expect(spy).toBeCalledTimes(1);
    });

    it('return quote from fetchQuote as THIS IS YS and JANE', () => {
        expect(qotd.quote).toEqual('THIS IS YS and JANE');
    });

});