# Kata French Converter

![GitHub package.json version](https://img.shields.io/github/package-json/v/hajriaimen/kata-french-converter)
![GitHub](https://img.shields.io/github/license/hajriaimen/kata-french-converter)
![GitHub issues](https://img.shields.io/github/issues/hajriaimen/kata-french-converter)

Kata French Numbers Converter is a module for converting numbers to their French word representations.

## Installation

npm install kata-french-converter
## Usage
```
const { convertNumberToFrench } = require('kata-french-converter');
const result = convertNumberToFrench([123]);
console.log(result); // Outputs: "cent-vingt-trois"
```

API
```
convertNumberToFrench(number: number): string
Converts a given number to its French word representation.

number (required): The number to be converted.
convertNumbersToFrenchList(numbers: number[]): string[]
Converts an array of numbers to their French word representations.

numbers (required): An array of numbers to be converted.
```

#Examples
```
[25, 42, 99]
node example/index.js
// Outputs: ["vingt-cinq", "quarante-deux", "quatre-vingt-dix-neuf"]
```