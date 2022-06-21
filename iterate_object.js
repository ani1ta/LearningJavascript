// iterate objects
// Object.keys
// for loop

const obj ={
    fname: "Anita",
    lname: "Mishra",
    age: 21
}

for(let key in obj){
    console.log(key)
}

console.log(typeof(Object.keys(obj)))

for(let key of Object.keys(obj)){
    console.log(key)
}