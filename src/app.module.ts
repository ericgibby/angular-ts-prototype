import { module } from 'angular';
import { App } from './app.controller';

module('angular-ts', [])
	.controller('AppController', App.Controller);