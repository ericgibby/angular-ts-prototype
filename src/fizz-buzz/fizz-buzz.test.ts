import { FizzBuzz } from './fizz-buzz';

describe('FizzBuzz', () => {

	it('fizzBuzz()', () => {
		expect(FizzBuzz.fizzBuzz(2)).toBe('1 2');
		expect(FizzBuzz.fizzBuzz(3)).toBe('1 2 Fizz');
		expect(FizzBuzz.fizzBuzz(4)).toBe('1 2 Fizz 4');
	});

});
