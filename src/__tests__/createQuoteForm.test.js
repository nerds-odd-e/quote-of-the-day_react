import { mount } from 'enzyme';
import React from 'react';
import CreateQuoteForm from '../CreateQuoteForm';

describe('CreateQuoteForm conponent', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = mount(<CreateQuoteForm onClose={()=>1} />);
    })

    it("must have the create button", () =>{
        expect(wrapper.find("button").exists()).toBeTruthy();
    })
 });