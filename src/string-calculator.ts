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
        // Split by both comma (`,`) and newline (`\n`)
        const numArray = numbers.split(/[\n,]/).map(num => parseFloat(num.trim()));

        return numArray.reduce((sum, num) => sum + num, 0);       
    }
}