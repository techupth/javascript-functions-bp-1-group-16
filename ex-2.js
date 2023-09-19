// Exercise #2 Declaring Function Expression
// Start coding here


let checkNum = function (a,b) {
    return typeof a === 'number' && typeof b === 'number';
}
let add = function (a,b) {
    if (checkNum(a,b)) {
        return a+b;
    } else {
        return 'error: the input is not number';
    }
}    

console.log(add(10, 5));

let subtract = function (a,b) {
    if (checkNum(a,b)) {
        return a-b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(subtract(10, 5));

let multiply = function (a,b) {
    if (checkNum(a,b)) {
        return a*b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(multiply(10, 5));


let divide = function (a,b) {
    if (checkNum(a,b)) {
        return a/b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(divide(10, 5));

