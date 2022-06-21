// this is a object

const  obj ={
    key1: "Value1",
    key2: "Value2"
}

const obj2 = Object.create(obj)
obj2.key3 = "Value3"
// console.log(obj)
console.log(obj2)
console.log(obj2.__proto__)