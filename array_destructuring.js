// array destructuring

const array1 = ['value1', 'value2', 'value3', 'value4']
// let var1 = array1[0]
// let var2 = array1[1]
// console.log("value of var1:", var1)
// console.log("Value of var2 is:", var2)
// let [var1, var2] = array1
// console.log("value of var1:", var1)
// console.log("Value of var2 is:", var2)
// let Mynewarray = array1.slice(2);
// console.log(Mynewarray)
// console.log(array1)
let [var1, var2, ...restvalue] = array1
console.log(array1)