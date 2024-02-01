const { numbersToFrench } = require('../dist');

function transformStringToNumbers(str) {
    const trimmedStr = str.replace(/[\[\]\s]/g, ''); 
    const numberStrings = trimmedStr.split(','); 
    const numbers = numberStrings.map(Number); 
    return numbers;
}
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Please enter an array of numbers: `, input => {
    console.log(numbersToFrench(transformStringToNumbers(input))); 
    readline.close();
  });