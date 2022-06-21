const person ={
    fname: "Anita",
    age: 21,
    1: "one"
}

console.log(person.fname)
// console.log(person[fname])
for(let key in person){
    console.log(typeof key)
}

const person1 = new Map()
person1.set("fname", "anita")
person1.set("age", 21)
person1.set(1, "one")
console.log(person1)
// console.log(person1['fname'])
console.log(person1.get(1))
console.log(person1.get('age'))
console.log(person1.get('fname'))

console.log(person1.keys())
for(let key of person1.keys()){
    console.log(key)
    console.log(typeof key)
}

for(let [key, value] of person1){
    console.log(Array.isArray(key))
    console.log(key, value)
}