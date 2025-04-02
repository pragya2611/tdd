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

        let delimiter = /[\n,]/;
        const customDelimiterMatch = numbers.match(/\/\/(.*?)\n/);

        if (customDelimiterMatch) {
            delimiter = new RegExp(customDelimiterMatch[1]); 
            numbers = numbers.substring(customDelimiterMatch[0].length); 
        }

        const numArray = numbers.split(delimiter).map(num => parseFloat(num.trim()));

       
        return numArray.reduce((sum, num) => sum + num, 0);       
    }
}