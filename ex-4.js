// Exercise #4 Grouping Function with Objects

// Start coding here
//let calculator = {};

let checkNum = (a,b) => typeof a === 'number' && typeof b === 'number';
let add = (a,b) => (checkNum(a,b)) ? a+b : 'error: the input is not number';
//console.log(add(10, 5));

let subtract = (a,b) => (checkNum(a,b)) ? a-b : 'error: the input is not number';
//console.log(subtract(10, 5));

let multiply = (a,b) => (checkNum(a,b)) ? a*b : 'error: the input is not number';
//console.log(multiply(10, 5));

let divide = (a,b) => (checkNum(a,b)) ? a/b : 'error: the input is not number';
//console.log(divide(10, 5));

let calculator = {
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide
};

let resultAdd = calculator.add(10,20);
console.log(resultAdd);
let resultDivide = calculator.divide(3000,10);
console.log(resultDivide);


//ให้ Declare ตัว Object ที่ชื่อ calculator เพื่อรวบรวม Function ที่เขียนจาก Exercise ข้อที่ 3 ให้อยู่ใน Object โดยที่
//Object calculator จะมี Key เป็น add และมี Value เป็น Function ที่ชื่อว่า add
//Object calculator จะมี Key เป็น subtract และมี Value เป็น Function ที่ชื่อว่า subtract
//Object calculator จะมี Key เป็น multiply และมี Value เป็น Function ที่ชื่อว่า multiply
//Object calculator จะมี Key เป็น divide และมี Value เป็น Function ที่ชื่อว่า divide
//ให้ Declare ตัว Variable ที่มีชื่อว่า resultAdd
//ให้ Assign ตัว Value ของ resultAdd เป็นการ Execute ตัว Function add ที่อยู่ใน Object ที่ชื่อ calculator โดยมี Parameter a เป็น 10 และ b เป็น 20
//ทำการแสดงผลค่าของ resultAddออกมาดูทางหน้าจอด้วย console.log()
//ให้ Declare ตัว Variable ที่มีชื่อว่า resultDivide
//ให้ Assign Value ของ resultDivide เป็นการ Execute ตัว Function divide ที่อยู่ใน Object ที่ชื่อ calculator โดยมี Parameter a เป็น 3000 และ b เป็น 10
//ทำการแสดงผลค่าของ resultDivideออกมาดูทางหน้าจอด้วย console.log()
