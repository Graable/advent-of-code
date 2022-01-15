import { readFileSync } from 'fs';

const input = readFileSync('./day2/input.txt', 'utf-8').split("\n")

let x = 0
let y = 0

for (let i = 0; i < input.length; i = i +1) {
    // split into 2 parts
    let line = input[i].split(" ");

    let operation = line[0];
    let value = Number.parseInt(line[1], 10);
    
    //console.log(operation + value);

    switch (operation) {
    case "forward":
        x = x + value;
        break;
    case "up":
        y = y - value;
        break;
    case "down":
        y = y + value;
        break;
    }
}
let finalNumber = x * y;
console.log(finalNumber);
