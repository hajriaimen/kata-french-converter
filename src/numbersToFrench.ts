import numberToFrench from "./numberToFrench";

export default function numbersToFrench(numbers: number[]): string[] {
    return numbers.map(number => numberToFrench(number));
}
