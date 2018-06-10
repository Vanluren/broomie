import React from 'react';
import { shallow } from 'enzyme'
import SidebarMenu from '../SidebarMenu.container';

describe('SidebarMenu renders correctly', ()=>{
	it('Should render without crashing', () => {
		shallow(<SidebarMenu/>);
	});
});