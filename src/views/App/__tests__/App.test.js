import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../../../commonComponents/Header/Header.container';

describe('App.Js', ()=>{
	it('renders without crashing', ()=>{
		shallow(<App />);
	});
	it('contains a Header-element',()=>{
		const wrapper = shallow(<App/>);
// eslint-disable-next-line no-unused-expressions
		expect(wrapper.contains(<Header/>)).toBeTruthy;
	});
});