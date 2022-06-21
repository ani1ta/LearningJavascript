function personInfo(){
    console.log(`person name is ${this.firstname} and age is ${this.age}`)
}

const person ={
    firstname: "anita",
    age: 21,
    about: personInfo
}
const person1 ={
    firstname: "divvya",
    age: 22,
    about: personInfo
}
const person2 ={
    firstname: "priti",
    age: 20,
    about: personInfo
}
const person3 ={
    firstname: "mani",
    age: 25,
    about: personInfo
}


person.about()
person1.about()
person2.about()
person3.about()
person4.about()