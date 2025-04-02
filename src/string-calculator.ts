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

        const delimiters = [',', '\n'];

        // Create a regex pattern dynamically using the delimiters array
        const delimiterPattern = new RegExp(`[${delimiters.join('')}]`);

        // Split based on the dynamic delimiter pattern
        const numArray = numbers.split(delimiterPattern).map(num => parseFloat(num.trim()));

       
        return numArray.reduce((sum, num) => sum + num, 0);       
    }
}