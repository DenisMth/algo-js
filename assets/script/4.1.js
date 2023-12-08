function calcSurface (x, y){
    return x*y;
}

let width = Number(prompt("Entrez la largeur de votre rectangle"));
let height = Number(prompt("Entrez la hauteur de votre rectangle"));

console.log(calcSurface(width, height));