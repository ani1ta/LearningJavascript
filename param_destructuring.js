// parameter destructuring

const person={
    name: "Anita",
    gender: "Female"
}

// function printDetails(obj){
//     console.log(obj.name)
//     console.log(obj.gender)
// }

// printDetails(person)

function printDetails({name, gender}){
    console.log(name)
    console.log(gender)
}

printDetails(person)