import * as angular from 'angular';
import { App } from './app.controller';

angular
	.module('angular-ts', [])
	.controller('AppController', App.Controller);