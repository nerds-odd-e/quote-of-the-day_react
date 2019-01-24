import { mount } from 'enzyme';
import React from 'react';
import NavigateBar from '../NavigateBar';
import CreateQuoteForm from '../CreateQuoteForm';

describe('QuoteOfTheDay conponent', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = mount(<NavigateBar />);
    })

    it("must have the create button", () =>{
        expect(wrapper.find("button").exists()).toBeTruthy();
        expect(wrapper.find("button").text()).toEqual("Create Quote");
    })

    it("must should the create quote form when click the button", () =>{
        expect(wrapper.containsMatchingElement(<CreateQuoteForm />)).toBeFalsy();
        wrapper.find("button").
            simulate("click");
        expect(wrapper.containsMatchingElement(<CreateQuoteForm />)).toBeTruthy();
    })

 });