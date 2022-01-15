import { readFileSync } from 'fs';

const input = readFileSync('./day2/input.txt', 'utf-8').split("\n")

let x = 0
let y = 0
let z = 0

for (let i = 0; i < input.length; i = i +1) {
    // split into 2 parts
    let line = input[i].split(" ");

    let operation = line[0];
    let value = Number.parseInt(line[1], 10);
    
    //console.log(operation + value);

    switch (operation) {
    case "forward":
        x = x + value;
        y = y + (z * value)
        break;
    case "up":
        z = z - value;
        break;
    case "down":
        z = z + value;
        break;
    }
}
let finalNumber = x * y;
console.log(finalNumber);
