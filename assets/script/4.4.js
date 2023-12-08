let inputAr = ["Noé", "julien", "Otman", "Aurélien", "Winona", "Alexis", "Damien", "Dylan", "Ugur", "Jérémy", "Mathias", "Maoro", "Robin", "Nicolas", "Stacy", "Alice", "Denis", "Giuseppe", "Alexis", "Cassidy", "Huseyin", "Thomas", "Marvin", "Hanen", "Oksana", "Joshua"];


function randomNumber(max){
    return Math.floor(Math.random() * max);
    // generates a number between 0 and max
}

let n = randomNumber(inputAr.length);

function pickLearner(inputAr, n){
    return inputAr[n];
}

let learner = pickLearner(inputAr, n);

console.log(learner);