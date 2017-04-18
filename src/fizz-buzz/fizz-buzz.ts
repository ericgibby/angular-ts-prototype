export module FizzBuzz {
	export function fizzBuzz(n: number): string {
		let output = [];
		for (let i = 1; i <= n; i++) {
			if (i % 5 && i % 3) {
				output.push(i);
			}
			if (i % 3 === 0) {
				output.push('Fizz');
			}
			if (i % 5 === 0) {
				output.push('Buzz');
			}
		}
		return output.join(' ');
	}
}