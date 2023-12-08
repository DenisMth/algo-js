let array = [56, 23, 12, 1, 54, 3, 0.5, 51];

let min = array[0];
let max = array[0];

for (elem of array){

    if (elem < min){
        min = elem;
    }
    if (elem > max) {
        max = elem;
    }
}

console.log("The min value is " + min + " And the max value is " + max + ".");