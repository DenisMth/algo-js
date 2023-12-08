let x1 = prompt("Entrez l'abscisse du premier point");
let y1 = prompt("Entrez l'ordonnée du premier point");

let x2 = prompt("Entrez l'abscisse du deuxième point");
let y2 = prompt("Entrez l'ordonnée  du deuxième point");


function calcDistance(x1, x2, y1, y2){

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

console.log(calcDistance(x1, x2, y1, y2));