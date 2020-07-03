import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('App', () => {
	it('renders without crashing', () => {
		const mountedApp = shallow(<App />);
	})

	it('renders StoreLocator', () => {
		const mountedApp = shallow(<App />);
		const locators = mountedApp.find('StoreLocator')
		expect(locators.length).toBe(1);
	})
})