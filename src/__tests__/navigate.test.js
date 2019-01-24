import { mount } from 'enzyme';
import React from 'react';
import NavigateBar from '../NavigateBar';

describe('QuoteOfTheDay conponent', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = mount(NavigateBar())
    })

    it("must have the create button", () =>{
        expect(wrapper.find("button").exists()).toBeTruthy();
        expect(wrapper.find("button").text()).toEqual("Create Quote");
    })

 });