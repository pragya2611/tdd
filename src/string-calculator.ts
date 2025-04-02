import { ICalculator } from "./calculator.interface";

export class StringCalculator implements ICalculator {

    public add(numbers: string): number {
        numbers = numbers.trim();
        if (numbers === '') {
          return 0; 
        }
        if (numbers.length === 1 && !numbers.includes(',')) { 
            return parseFloat(numbers); 
        }
        if (numbers.includes(',')) {
            // Split the string by comma and convert to numbers
            // Then sum them up
            return numbers.split(',').map(num => parseFloat(num.trim())).reduce((sum, num) => sum + num, 0);
        }
        return 0;
    }
}