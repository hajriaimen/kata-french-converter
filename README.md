# Kata French Converter

![GitHub package.json version](https://img.shields.io/github/package-json/v/hajriaimen/kata-french-converter)
![GitHub](https://img.shields.io/github/license/hajriaimen/kata-french-converter)
![GitHub issues](https://img.shields.io/github/issues/hajriaimen/kata-french-converter)

Kata French Numbers Converter is a module for converting numbers to their French word representations.

# Installation

npm install kata-french-converter

# usage

const { convertNumberToFrench } = require('kata-french-converter');

const result = convertNumberToFrench([123]);
console.log(result); // Outputs: "cent-vingt-trois"



Certainly! Below is a simple template for a README file for your "kata-french-converter" module:

markdown
Copy code
# Kata French Converter

![GitHub package.json version](https://img.shields.io/github/package-json/v/hajriaimen/kata-french-converter)
![GitHub](https://img.shields.io/github/license/hajriaimen/kata-french-converter)
![GitHub issues](https://img.shields.io/github/issues/hajriaimen/kata-french-converter)

Kata French Numbers Converter is a module for converting numbers to their French word representations.

## Installation

```bash
npm install kata-french-converter
Usage
javascript
Copy code
const { convertNumberToFrench } = require('kata-french-converter');

const result = convertNumberToFrench(123);
console.log(result); // Outputs: "cent-vingt-trois"
API
convertNumberToFrench(number: number): string
Converts a given number to its French word representation.

number (required): The number to be converted.
convertNumbersToFrenchList(numbers: number[]): string[]
Converts an array of numbers to their French word representations.

numbers (required): An array of numbers to be converted.


#Examples
const { convertNumbersToFrenchList } = require('kata-french-converter');

const numbers = [25, 42, 99];
const results = convertNumbersToFrenchList(numbers);
console.log(results);
// Outputs: ["vingt-cinq", "quarante-deux", "quatre-vingt-dix-neuf"]
