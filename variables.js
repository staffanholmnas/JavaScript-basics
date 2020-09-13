// Type "node <file location> to run or ctrl + alt +n with code runner."

console.log("Hello World!"); // Prints Hello World! to the console.

// A simple if-statement
var x = 4;
if (x < 5) {
    x = 23;
}
console.log(x);

// Equal

let y = 4;
console.log(y === 3); // false
console.log(y !== 3); // true

// Difference between var and let

function varTest() {
    var x = 1;
    {
        var x = 2;  // The variable changes "globally"
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    {
        let x = 2;  // The variable changes only in this block
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

varTest();
letTest();
console.log(".....................");
let z = 5;

if (z === 5) {
    let z = 7;

    console.log(z); // Output: 7
}

console.log(z) // Output: 5

console.log(".....................");

// Arrays

// Simple arrays
let nameArray = ["bob", "eve", "jim", 4];
let name;
name = nameArray[1];

let numberArray = [2, 3, 44, "six", 4];
let number = numberArray[3];

console.log(name + " " + number);

console.log(".....................");

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 
console.log(t[1])     // -1 

console.log(".....................");

t.forEach(value => {
    console.log(value)  // The numbers 1, -1, 3, 5 are printed
})

console.log(".....................");

const arr = [1, -1, 3]

const arr2 = arr.concat(5) // Creates a new array with 5 added as the last element

console.log(arr)  // [1, -1, 3] 
console.log(arr2) // [1, -1, 3, 5]

const array1 = [1, 4, 9, 16];

console.log(".....................");

const map1 = array1.map(x => x * 2); // New array with a function passed to each element

console.log(map1); // Output: Array [2, 8, 18, 32]

const tarray = [1, 2, 3];

const m2 = tarray.map(value => '<li>' + value + '</li>')
console.log(m2)  // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

// Destructuring variables

const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

function Destr() {
    let a, b;
    [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2
}
Destr();

function Destr2() { // Swapping variables
    let a = 1, b = 3;
    [a, b] = [b, a];
    console.log(a); // 3
    console.log(b); // 1
}
Destr2();

function Destr3() { // Rest...
    const t = [1, 2, 3, 4, 5]
    const [first, second, ...rest] = t
    console.log(first, second)  // 1, 2 
    console.log(rest)          // [3, 4 ,5] 
}
Destr3();

console.log(".....................");

// Numbers

let r = 4
let circumference = 2 * Math.PI * r;
console.log(circumference)

let stringToNumber = parseInt('1234', 10); // 1234
let stringToBinary = parseInt('1011', 2); // 3 (binary)

console.log(stringToNumber)
console.log(stringToBinary)

// Strings

console.log("hello".length) // 5 
console.log('hello'.charAt(1)) // "e"
console.log('hello, world'.replace('world', 'Steve')) // "hello, Steve"
console.log('hello'.toUpperCase()) // "HELLO"
console.log("3" + 5 + 4) // "354"
console.log('hello' + ' world') // "hello world")
console.log(123 == '123') // true
console.log(1 == true) // true
console.log(123 === '123') // false