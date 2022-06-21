// fill method 
// or splice method


// fill method

const array = Array(10).fill(0)
console.log(array)

const num = [2, 3, 4, 6, 8, 9, 5, 7, 1, 10]
num.fill(0, 1, 4)
console.log(num)



// splice method
const item = ['item1', 'item2', 'item3']
item.splice(0, 1)
console.log(item)

const items = ['Anita', 'Divya']
items.splice(2, 0, "Priti", "value")
console.log(items)
