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


