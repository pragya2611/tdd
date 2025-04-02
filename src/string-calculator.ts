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
            const numArray = numbers.split(',').map(num => parseFloat(num.trim()));
            return numArray.reduce((acc, curr) => acc + curr, 0);
        }
        return 0;
    }
}