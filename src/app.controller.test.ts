import * as angular from 'angular';
import 'angular-mocks';
import { App } from './app.controller';

describe('AppController', () => {
	let timeout: ng.ITimeoutService;

	beforeEach(() => {
		angular.mock.inject(($timeout: ng.ITimeoutService) => {
			timeout = $timeout;
		});
	});

	it('initializes', () => {
		let ctrl = new App.Controller(timeout);
		expect(ctrl).toBeDefined();
	});

	it('title property initialized', () => {
		let ctrl = new App.Controller(timeout);
		expect(ctrl.title).toBe('Hello');
	});
});

