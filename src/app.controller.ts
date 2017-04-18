export module App {

	export class Controller {
		timeout: ng.ITimeoutService;

		static $inject: string[] = ['$timeout'];
		constructor(timeout: ng.ITimeoutService) {
			this.timeout = timeout;
		}
		title: string = 'Hello';
	}
}
