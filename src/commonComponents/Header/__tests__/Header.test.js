import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header.container';
import HeaderLogo from '../components/Logo';
import HeaderTitle from '../components/Title';
import logo from '../../../assets/images/logo.svg';

describe('Header renders correctly', () => {
	let ComponentWrapper;
	it('<Header>-Component renders without crashing', () => {
		shallow(<Header />);
	});
	beforeEach(() => (
		ComponentWrapper = shallow(<Header />)
	));
	it('contains a logo-component', () => {
		expect(ComponentWrapper.contains(<HeaderLogo />)).toBeTruthy;
	});
	it('should contain a <HeaderTitle/>-element', () => {
		expect(ComponentWrapper.contains(<HeaderTitle />)).toBeTruthy;
	});
	
	describe('Logo-component', () => {
		it("renders an logo containing an image with correct src", () => {
			const wrapper = shallow(<HeaderLogo src={logo} />);
			expect(wrapper.html())
				.toContain(
					'<img class="sc-bwzfXH eMMvRn" src="logo.svg" alt="logo"/>'
				);
		});
	});
	describe('Title-component', () => {
		const wrapper = shallow(<HeaderTitle/>);
		it('should show a welcome message in the title to Brian', () => {
			expect(wrapper.html()).toContain('Velkommen Brian')
		});
	});
});