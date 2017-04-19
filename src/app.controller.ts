import * as ng from 'angular';

export module App {

	const titles: string[] = [
		'Hello',
		'World'
	];

	export class Controller {
		private counter: number = 0;
		private intervalPromise: ng.IPromise<any>;

		static $inject: string[] = ['$interval'];
		constructor(private interval: ng.IIntervalService) {
			this.intervalPromise = this.interval(this.onInterval.bind(this), 1000);
		}

		title: string = titles[this.counter];

		onInterval(): void {
			this.counter++;
			this.title = titles[this.counter % titles.length];
		}
	}
}
