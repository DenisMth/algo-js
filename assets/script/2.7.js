let n = Number(prompt("Enter a number"));
let numbers = new Array;
numbers.length = n;
let sum = 0;

for (let i = 0; i < n; i++){
    numbers[i] = Number(prompt("Enter a number"));
}


for (let i = 0; i < n; i++){
    sum += numbers[i];
}

console.log("The result is " + sum);