import React from 'react';
import { shallow } from 'enzyme'
import SidebarMenu from '../SidebarMenu.container';

describe('SidebarMenu renders correctly', ()=>{
	let ContainerWrapper;
	it('Should render without crashing', () => {
		shallow(<SidebarMenu/>);
	});
	
	beforeEach(()=>{
		ContainerWrapper = shallow(<SidebarMenu/>);
	})
	it('Should render four menupoints', () => {
		expect(ContainerWrapper.contains(<SidebarLink/>).toBeTruthy());
	});
	
});