// class or constructor
// same work like function

class createUser{
    constructor(firstName, lastName, age, email, address){
        console.log("Constructor called!!")
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.address = address
    }

    about(){
        return `${this.firstName} is ${this.age} years old`
    }

    Isage(){
        return this.Isage>=18
    }

    sing(){
       return `ton la la la` 
    }

    func(a) {
        console.log(a)
    }
}

const user1 = new createUser("Anita", "Mishra", 21, "anmishra@gmail.com", 'dtyrty')
const user2 = new createUser("div", "shukla", 23, "divsh@gmail.com", 'ghjkjhgy')
const user3 = new createUser("anuj", "Mishra", 18, "anumishra@gmail.com", 'qwertyu')
const user4 = new createUser("harsh", "Yadav", 40, "yadhar@gmail.com", 'nmkjhgd')
const user5 = new createUser("rosh", "pathan", 35, "roshpa@gmail.com", 'sdfghjk')
console.log(user1)
console.log(user1.about())
console.log(user1.Isage())
user1.func("Annie")



// second example 

class Parent{
    constructor(fname, lname, age){
        this.fname = fname
        this.lname = lname
        this.age = age
    }

    des(){
        return `${this.fname} ${this.lname} is ${this.age} years old`
    }
}

const user = new Parent("Hari", "Mishra", 45)
console.log(user)
console.log(user.des())