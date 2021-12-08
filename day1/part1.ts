import { readFileSync } from 'fs';

const numbers = readFileSync('./day1/input.txt', 'utf-8').split("\n").map(strValue => Number.parseInt(strValue, 10));

let finalNumber = 0;
for (let i = 0; i < numbers.length; i = i +1) {
    if (i != numbers.length) {
        let currentNumber = numbers[i];
        let nextNumber = numbers[i + 1];
    
        if (currentNumber < nextNumber) {
            finalNumber = finalNumber + 1;
        } 
    
    }
}
console.log(finalNumber)

/*ubound(array) = max


x = 0

for i = 1 to max
get the array 
compare i to i + 1
if i + 1 > i then 
x = x +1
else 
endif
step 1 

console.log(x) 

*/