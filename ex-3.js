// Exercise #3 Declaring Arrow Function
// Start coding here

//Arrow Function แบบเต็ม:
let checkNum = (a,b) => {
    return typeof a === 'number' && typeof b === 'number';
}
let add = (a,b) => {
    if (checkNum(a,b)) {
        return a+b;
    } else {
        return 'error: the input is not number';
    }
}    

console.log(add(10, 5));

let subtract = (a,b) => {
    if (checkNum(a,b)) {
        return a-b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(subtract(10, 5));

let multiply = (a,b) => {
    if (checkNum(a,b)) {
        return a*b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(multiply(10, 5));


let divide = (a,b) => {
    if (checkNum(a,b)) {
        return a/b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(divide(10, 5));



//Arrow Function แบบลดรูป (Implicit Return):
//skip 'let' as it's repetitive above
checkNum = (a,b) => typeof a === 'number' && typeof b === 'number';
add = (a,b) => (checkNum(a,b)) ? a+b : 'error: the input is not number';
console.log(add(10, 5));

subtract = (a,b) => (checkNum(a,b)) ? a-b : 'error: the input is not number';
console.log(subtract(10, 5));

multiply = (a,b) => (checkNum(a,b)) ? a*b : 'error: the input is not number';
console.log(multiply(10, 5));

divide = (a,b) => (checkNum(a,b)) ? a/b : 'error: the input is not number';
console.log(divide(10, 5));

