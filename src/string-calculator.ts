import { ICalculator } from "./calculator.interface";

export class StringCalculator implements ICalculator {

    public add(numbers: string): number {
        numbers = numbers.trim();
        if (!numbers) return 0; 

        const delimiter = this.getDelimiter(numbers);

        const numArray = numbers.split(delimiter).map(num => parseFloat(num.trim()));

        const negativeNumbers = numArray.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
        }

        const numberGreaterThanThousand = numArray.filter(num => num > 1000);
        if (numberGreaterThanThousand.length > 0) { 
            console.warn(`Ignoring numbers greater than 1000: ${numberGreaterThanThousand.join(',')}`); 
        }
        const validNumbers = numArray.filter(num => num <= 1000);
        if (validNumbers.length === 0) return 0;
        if (validNumbers.length === 1) return validNumbers[0];
        return validNumbers.reduce((sum, num) => sum + num, 0);       
    }

    private getDelimiter(numbers: string): RegExp {
        const customDelimiterMatch = numbers.match(/^\/\/(.*?)\n/);
        return customDelimiterMatch ? new RegExp(customDelimiterMatch[1]) : /[\n,]/;
    }
}