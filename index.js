console.log("---- ---- -----")
console.log("Que 1")

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const totalLength = (arr) => arr.reduce((acc, curr) => acc + curr.length, 0)
console.log(totalLength(strings));

console.log("---- ---- -----")
console.log("Que 2")

const numbers = [1, 2, 3, 4, 5];
const sumSquares = (arr) => arr.reduce((acc, curr) => curr*curr + acc, 0)
console.log(sumSquares(numbers));

console.log("---- ---- -----")
console.log("Que 3")

const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];
  const totalValue = (arr) => arr.reduce((acc, curr) => curr.price + acc, 0)
  console.log(totalValue(items)); 

  console.log("---- ---- -----")
console.log("Que 4")

 const concatStrings = (arr) => arr.reduce((acc, curr) => acc + curr, '')
console.log(concatStrings(['this', 'is', 'fun']))

console.log("---- ---- -----")
console.log("Que 5")

const numberss = [1, 2, 3, 4, 5];
const product = (arr) => arr.reduce((acc, curr) => acc*curr, 1)
console.log(product(numbers));

console.log("---- ---- -----")
console.log("Que 6")

const stringgs = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"]
const longestString = (arr) => arr.reduce((acc, curr) => curr.length > acc.length ? curr : acc, '')
console.log(longestString(stringgs)); 

console.log("---- ---- -----")
console.log("Que 7")

const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 30}, 
    {name: 'Naina', age: 45}
]
const oldestPersonName = (arr) => arr.reduce((acc, curr) => curr.age > acc.age ? curr : acc, arr[0]).name
console.log(oldestPersonName(people)); 

console.log("---- ---- -----")
console.log("Que 8")

const peopple = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];
  const getAverageAge = (arr) =>  {
    
    const total = arr.reduce((acc, curr) =>  acc + curr.age, 0)
    const avgAge = total/peopple.length
     return avgAge
  }
  console.log(getAverageAge(peopple));

  console.log("---- ---- -----")
  console.log("Que 9")

  const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
  ];
  const findMostExpensiveProduct = (arr) => arr.reduce((acc, curr) => curr.price > acc.price ? curr : acc, arr[0])
  console.log(findMostExpensiveProduct(products)); 

  console.log("---- ---- -----")
  console.log("Que 10")

  const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana']
  const countStrings = (arr) => arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})
  console.log(countStrings(fruits));
