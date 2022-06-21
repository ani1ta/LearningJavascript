// spread operator

const array = ['item1', 'item2', 'item3', 'item4']
const ar1 = array[0]
const arr2 = array[1]

let arr= [ar1, arr2] 
let arr1 = [ar1, arr2, ...array]
console.log(arr1)
console.log(arr)