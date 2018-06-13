import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../../../commonComponents/Header/Header.container';
import SidebarMenu from '../../../commonComponents/SidebarMenu/SidebarMenu.container';

describe('App.Js', () => {
	let container;
	it('renders without crashing', () => {
		shallow(<App />);
	});
	beforeEach(() => {
			container = shallow(<App />)
	});
	
	it('contains a Header-element', () => {
		expect(container.contains(<Header />)).toBeTruthy;
	});
	
	it('contains a Sidebar-element', () => {
		expect(container.contains(<SidebarMenu />)).toBeTruthy;
	});
});