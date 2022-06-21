// clone of the array means copy of the array

const array1 = ["item1", "item2", "item3"]
const array2 = array1
console.log(array2)


// concat array
const onearray = ['value1', 'value2', 'value3']
const twoarray = ['value5', 'value6']
const ans = [...onearray, ...twoarray]
console.log(ans)