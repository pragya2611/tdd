import { StringCalculator } from './../src';
import { ICalculator } from './../src/calculator.interface'; 


describe('StringCalculator', () => {
    let calculator: StringCalculator;
  
    beforeEach(() => {
      calculator = new StringCalculator();
    });

    test('should implement the ICalculator interface', () => {
      // Ensure that the calculator object is of type ICalculator
      const isICalculator: ICalculator = calculator;
      expect(isICalculator.add).toBeInstanceOf(Function);
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add('')).toBe(0);
    });

    test('should return the number for a single number', () => {
        expect(calculator.add('1')).toBe(1);
    });

    test('should return the number for a single number having some trailing space', () => {
        expect(calculator.add('1 ')).toBe(1);
    });

    test('should return the sum of two numbers separated by a comma', () => {
        expect(calculator.add('1,5')).toBe(6);
    });

    test('should return the sum of multiple numbers(3 numbers) separated by commas', () => {
        expect(calculator.add('1,2,3')).toBe(6);
    });
});