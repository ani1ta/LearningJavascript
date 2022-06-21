// object destructuring

const obj = {
    fname: "Anita",
    lname: "Mishra",
    age: 21
}

let{fname:firstname} = obj
console.log(firstname)
console.log(obj)
let{fname, lname} = obj
console.log(obj)