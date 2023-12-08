let min = prompt ("Enter a minimal value");
let max = prompt ("Enter a maximal value");
let current = prompt ("Enter your current value");

if ((Number(current) >= Number(min)) && (Number(current) <= Number(max))){
    alert ("Current IS between min and max");
} else {
    alert ("Current is NOT between min and max");
}

if (Number(min) > Number(max)){
    alert("Error HOW CAN YOUR MIN BE GREATER THAN YOUR MAX ???");
}