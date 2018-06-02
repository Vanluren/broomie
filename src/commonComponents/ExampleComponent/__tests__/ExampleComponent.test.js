import React from 'react';
import ReactDOM from 'react-dom';
import ExampleView from '../ExampleComponent.container';

describe('ExampleView renders correctly', ()=>{
	test('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ExampleView />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});