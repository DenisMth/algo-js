console.log("Hello World !");


let min = prompt("Enter min");
let max = prompt("Enter max");
let current = prompt("Enter current");

if ((parseInt(current) > parseInt(min)) && (parseInt(current) < parseInt(max))){
    alert("Current is between min an max");
} else {
    alert("Current is NOT between min and max");
}