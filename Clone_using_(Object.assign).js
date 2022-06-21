// clone using Object.assign

const obj ={
    fname: "Anita",
    age: 21
}

// const obj2 = {...obj}
// obj2.keys = "Value3"

const obj2 = Object.assign({}, obj)
obj2.keys = "Value3"
console.log(obj)


console.log(obj2)