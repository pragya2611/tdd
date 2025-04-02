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

});