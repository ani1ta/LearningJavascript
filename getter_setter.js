// getter or setter

class Person{
    constructor(fname, lname, age){
        this.fname =fname
        this.lname =lname
        this.age = age
    }

    get fullname(){
        return `${this.fname} ${this.lname}`
    }

    set fullname(fullname){
        const [fname, lname] = fullname.split(" ")
        this.fname = fname
        this.lname =lname
    }
}

const person1 = new Person("Anita", "Mishra", 21)
console.log(person1.fullname)
person1.fullname= "Annie Mishra"
console.log(person1.fullname)



// another example


class users{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get FullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set FullName(FullName){
        const [firstName, lastName] = FullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }
}

const user1 = new users("Mani", "Mish", 26)
console.log(user1)
console.log(user1.FullName)

user1.FullName = "Shiva Yadav"
console.log(user1)
console.log(user1.FullName)
