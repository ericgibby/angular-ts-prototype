import * as angular from 'angular';
import 'angular-mocks';
import { App } from './app.controller';

describe('AppController', () => {
	let interval: ng.IIntervalService,
		scope: ng.IRootScopeService,
		ctrl: App.Controller;

	beforeEach(() => {
		angular.mock.inject(($interval: ng.IIntervalService, $rootScope: ng.IRootScopeService) => {
			interval = $interval;
			scope = $rootScope;
		});

		ctrl = new App.Controller(interval);
	});

	it('initializes', () => {
		expect(ctrl).toBeDefined();
	});

	it('title property initialized', () => {
		expect(ctrl.title).toBe('Hello');
	});

	it('title updates when $interval fires', () => {
		interval.flush(1000);
		expect(ctrl.title).toBe('World');
	});
});

