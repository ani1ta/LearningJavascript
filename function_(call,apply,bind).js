// function call, apply, bind
// call --->> call the value or add the value without array
// apply --->> call and add the value with array
// bind --->> returns the function 

function about(hobby,favSinger){
    console.log(this.firstname, this.age, hobby, favSinger)
}

const person ={
    firstname: "Anita",
    age: 21
}
const person1 ={
    firstname: "Divya",
    age: 22
}
const person2 ={
    firstname: "Anuj",
    age: 18
}
const person3 ={
    firstname: "Priti",
    age: 20
}
const person4 ={
    firstname: "Manisha",
    age: 25
}
const person5 ={
    firstname: "shiv",
    age: 27
}

about.call(person, "reading", "Arijit Singh")
about.call(person2, "singing", "KK")
about.call(person3, "Cycling", "Kumar Sanu")
about.call(person4, "dancing", "jubin")

about.apply(person, ["Read", "Alka Yagnik"])

const user = about.bind(person, "Programming", "Udit Narayan")
user()


const users = {
    fname: "Harikesh",
    age: 29,
    about: function(){
        console.log(this.fname, this.age)
    }
}

const user1 = users.about.bind(users)
user1()