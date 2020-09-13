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
const wSquared = w.map(p => p * p) // [1, 4, 9]
console.log(wSquared)

function product(a, b) { // Old-school
  return a * b
}

const multiplication = product(2, 6) // 12
console.log(multiplication)

const average = function (a, b) {
  return (a + b) / 2
}
const averageResult = average(3, 4)
console.log(averageResult)

// Loops, for...in, for...of

const arr4 = [4,5,6]
for (const value of arr4) {
  console.log(value)
}

let obj4 = { a: 1, b: 2, c: 3}
for (let property in obj4) {
  console.log(property)
}
