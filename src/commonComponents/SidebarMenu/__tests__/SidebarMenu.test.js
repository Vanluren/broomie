import React from 'react';
import { shallow } from 'enzyme'
import SidebarMenu from '../SidebarMenu.container';
import { getNumberOfTickets } from '../../../services/selectors/selectors';

const mockTickets = {
	data:{
		tickets:{
			skader: [{
				timeCreated: new Date(1528900113000),
				type: 'skade',
				typeINT: 0
			}],
			klager: [{
				timeCreated: new Date(1528900113000),
				type: 'klage',
				typeINT: 1
			}],
		}
		
	}
}
describe('SidebarMenu renders correctly', ()=>{
	it('Should render without crashing', () => {
		shallow(<SidebarMenu/>);
	});
});

describe('SidebarMenu Ducks', () => {
	describe('Redux Reselect', () => {
		it('getNumberOfTickets should return the amount of skader and klager ind the store', () => {
			expect(getNumberOfTickets(mockTickets)).toEqual({
				numSkader: 1,
				numKlager: 1
			})
		});
	});
});