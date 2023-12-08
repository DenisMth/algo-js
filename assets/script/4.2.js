let randomNumber;

function rand10(){
    return Math.floor(Math.random() * 10);
    // generates a number between 0 and 10
}

randomNumber = Number(rand10());

console.log(randomNumber);