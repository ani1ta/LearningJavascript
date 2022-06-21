// set 
const item = ['item1', 'item2']
const numbers = new Set()
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(5)
numbers.add(6)
numbers.add(18)
numbers.add(item)
numbers.add(item)  // n set there is no duplicate item
numbers.add(['item1', 'item2'])
numbers.add(['item1', 'item2'])
console.log(numbers)
if(numbers.has(1)){
    console.log("Number 1 is present")
}
else{
    console.log("Number 1 is not present")
}

for(let Number of numbers){
    console.log(Number)
}

const myarray = [2, 4, 6, 8, 9, 3,3, 4, 4, 4, 4, 5]
const uniqueElement = new Set(myarray)
console.log(uniqueElement)
// console.log(uniqueElement.length)  ----- set me length nahi hota hai

let length = 0

for(let element of uniqueElement){
    length++
}
console.log(length)