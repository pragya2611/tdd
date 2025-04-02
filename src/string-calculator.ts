import { ICalculator } from "./calculator.interface";

export class StringCalculator implements ICalculator {

    public add(numbers: string): number {
        numbers = numbers.trim();
        if (!numbers) return 0; 

        const delimiter = this.getDelimiter(numbers);
        numbers = this.removeDelimiterPrefix(numbers);

        const numArray = this.parseNumbers(numbers, delimiter);

        this.validateNegatives(numArray);

        
        return this.addAllValidNumbers(numArray);       
    }

    private getDelimiter(numbers: string): RegExp {
        const customDelimiterMatch = numbers.match(/^\/\/(.*?)\n/);
        return customDelimiterMatch ? new RegExp(customDelimiterMatch[1]) : /[\n,]/;
    }

    private removeDelimiterPrefix(numbers: string): string {
        return numbers.startsWith("//") ? numbers.substring(numbers.indexOf("\n") + 1) : numbers;
    }

    private parseNumbers(numbers: string, delimiter: RegExp): number[] {
        return numbers.split(delimiter).map(num => parseFloat(num.trim()));
    }

    private validateNegatives(numArray: number[]): void {
        const negativeNumbers = numArray.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
        }
    }

    private addAllValidNumbers(numArray: number[]): number {
        const validNumbers = numArray.filter(num => num <= 1000);
        validNumbers
            .filter(num => num > 1000)
            .forEach(num => console.warn(`Ignoring number greater than 1000: ${num}`));

        return validNumbers.reduce((sum, num) => sum + num, 0);
    }
}