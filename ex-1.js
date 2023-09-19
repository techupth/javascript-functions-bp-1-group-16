// Exercise #1 Declaring Functions
// Start coding here

function checkNum(a,b) {
    return typeof a === 'number' && typeof b === 'number';
}
function add(a,b) {
    if (checkNum(a,b)) {
        return a+b;
    } else {
        return 'error: the input is not number';
    }
}    

console.log(add(10, 5));

function subtract(a,b) {
    if (checkNum(a,b)) {
        return a-b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(subtract(10, 5));

function multiply(a,b) {
    if (checkNum(a,b)) {
        return a*b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(multiply(10, 5));


function divide(a,b) {
    if (checkNum(a,b)) {
        return a/b;
    } else {
        return 'error: the input is not number';
    }
}   

console.log(divide(10, 5));

//ให้ Declare ตัว Function ในรูปแบบของ Function Declaration ดังนี้
//Declare ตัว Function ที่ชื่อว่า add ซึ่งรับ Parameter 2 ตัวคือ a เป็น Number และ b เป็น Number โดย Function นี้จะ Return ผลลัพธ์ออกมาเป็นผลรวมของ a และ b เช่น ถ้าเราเรียกใช้ add(10, 5) จะได้ผลลัพธ์เป็น 15
//Declare ตัว Function ที่ชื่อว่า subtract ซึ่งรับ Parameter 2 ตัวคือ a เป็น Number และ b เป็น Number โดย Function นี้จะ Return ผลลัพธ์ออกมาเป็นผลลบของ a และ b เช่น ถ้าเราเรียกใช้ subtract(10, 5) จะได้ผลลัพธ์เป็น 5
//Declare ตัว Function ที่ชื่อว่า multiply ซึ่งรับ Parameter 2 ตัวคือ a เป็น Number และ b เป็น Number โดย Function นี้จะ Return ผลลัพธ์ออกมาเป็นผลคูณของ a และ b เช่น ถ้าเราเรียกใช้ multiply(10, 5) จะได้ผลลัพธ์เป็น 50
//Declare ตัว Function ที่ชื่อว่า divide ซึ่งรับ Parameter 2 ตัวคือ a เป็น Number และ b เป็น Number โดย Function นี้จะ Return ผลลัพธ์ออกมาเป็นผลหารของ a และ b เช่น ถ้าเราเรียกใช้ divide(10, 5) จะได้ผลลัพธ์เป็น 2