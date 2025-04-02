import { ICalculator } from "./calculator.interface";

export class StringCalculator implements ICalculator {
    public add(numbers: string): number {
        if (numbers === '') {
          return 0; 
        }
        if (numbers.length === 1 && !numbers.includes(',')) { 
            return parseFloat(numbers); 
        }
        return 0;
    }
}