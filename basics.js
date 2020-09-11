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

// Objects

let petObject = { name: "molly", age: 3, color: "black" }
const fieldName = "color";
console.log(petObject.name + " " + petObject.age + " " + petObject[fieldName])
petObject.location = "Finland"
petObject["type of animal"] = "Cat" // If whitespaces or special characters, use []
console.log(petObject.location)
console.log(petObject["type of animal"])

// Functions

const sum = (p1, p2) => {
    console.log(p1 + " + " + p2 + " = ")
    return p1 + p2
}
const result = sum(1, 5)
console.log(result)

const square = p => { // If just a single parameter, then () is not needed
    console.log(p)
    return p * p
  }

const square2 = p => p * p // If only 1 expression, then the {} are not needed

console.log(square(2))
console.log(square2(4))

const w = [1, 2, 3]
const wSquared = t.map(p => p * p) // [1, 4, 9]
console.log(wSquared)

function product(a, b) { // Old-school
    return a * b
  }
  
  const multiplication = product(2, 6) // 12
  console.log(multiplication)

  const average = function(a, b) {
    return (a + b) / 2
  }
  const averageResult = average(3, 4)
  console.log(averageResult)