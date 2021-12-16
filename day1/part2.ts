import { readFileSync } from 'fs';

const data = readFileSync('./day1/input.txt', 'utf-8').split("\n").map(strValue => Number.parseInt(strValue, 10));

let finalNumber = 0;
for (let i = 0; i < data.length; i = i +1) {
    // Calculate sliding window
    let totalNumber = data[i] + data[i+1] + data[i+2];
    let totalNumber2 = data[i+1] + data[i+2] + data[i+3]
    if (totalNumber2 > totalNumber) {
        finalNumber = finalNumber + 1;
    } 

    
}
console.log(finalNumber)


/*
[1,35,76, 54, 8, 190, 89, 7]
           ^     ^ <- window

window = a + b + c

first iteration = a=1 + b=35 + c=76
second iteration = b=35 + c=67 + d=54 (d - a)
third iteration = c=35 + d=67 + e=54 (e - b)

*/