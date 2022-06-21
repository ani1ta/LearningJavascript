// arrray and array methods

const array = ["Anita", "Divya", "Manisha", "Anuj", "Shivam"]
console.log(array)
console.log(array[0])


// methods of array

// 1. push
array.push("Annie")
console.log(array)

// 2. pop
const removedata = array.pop()
console.log(array)
console.log(removedata) // pop returns the remove value


// 3. unshift ---> this method is like to push but this is slower than push
array.unshift("Annie")
console.log(array)


// 4. shift ---> this method same like as pop but this is slower than pop
const removervalue = array.shift()
console.log(array)
console.log(removervalue)