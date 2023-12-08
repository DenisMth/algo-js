let randomNumber;

function rand10(){
    return Math.floor(Math.random() * 10);
    //generates a number between 0 and 10
}

let n = Number(prompt("Entrez un chiffre"));
let numbers = [];


function multiRand(n, numbers){
    for (let i = 0; i < n; i++){
        randomNumber = Number(rand10());
        numbers.push(Number(randomNumber));
        // fills an array that contains n random numbers between 0 and 10
    }
}

multiRand(n, numbers);

console.log(numbers);