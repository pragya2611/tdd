import { ICalculator } from "./calculator.interface";

export class StringCalculator implements ICalculator {

    public add(numbers: string): number {
        numbers = numbers.trim();
        if (!numbers) return 0; 

        let delimiter = /[\n,]/;
        const customDelimiterMatch = numbers.match(/\/\/(.*?)\n/);

        if (customDelimiterMatch) {
            delimiter = new RegExp(customDelimiterMatch[1]); 
            numbers = numbers.substring(customDelimiterMatch[0].length); 
        }

        const numArray = numbers.split(delimiter).map(num => parseFloat(num.trim()));

        const negativeNumbers = numArray.filter(num => num < 0);
        if (negativeNumbers.length) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
        }

       
        return numArray.reduce((sum, num) => sum + num, 0);       
    }
}