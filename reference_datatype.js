// reference data types are
// array, function object

const array = ['item1', 'item2', 'item3']
const arry2 = array
console.log(array)
console.log(arry2)

function hello(){
    console.log("Hhello World!!")
    function happy(){
        console.log("Happy birhday!")
    }
    return happy()
}
hello()

const obj={
    fname: "Anita",
    age: 21
}
const obj2 = obj
console.log(obj)
console.log(obj2)