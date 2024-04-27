// 1. Define a function that takes a number and increments it by 1.

//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increment(num) {
  return num + 1
}
console.log(increment(1))
console.log(increment(2))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
console.log('Hello')
console.log(capitalize('world'))
console.log(capitalize('Hello'))

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function greet(name) {
  return `Hi, ${capitalize(name)} :)`
}
console.log(greet('edward'))
console.log(greet('Aiyana'))

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function countStrings(array) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      count++
    }
  }
  return count
}
console.log(countStrings(['edward']))
console.log(countStrings(['edward', 'aiyana']))
console.log(countStrings([1]))
console.log(countStrings([1, 'edward']))

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function addProperty(object) {
  if (!object.edward) {
    object.edward = 'amazing'
  }
  return object
}
console.log(addProperty({}))
console.log(addProperty({ aiyana: 'fantastic' }))
console.log(addProperty({ edward: 'fabulous' }))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalize, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greet, // etc
  d: countStrings,
  e: addProperty
}
