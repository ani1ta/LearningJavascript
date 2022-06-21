// static class method --->> this method only call by class name not object



class Person{
    constructor(fname, lname, age){
        this.fname =fname
        this.lname =lname
        this.age = age
    }

    static classIf(){
        return 'this is static method'
    }

    static desc= "This static property"

    get fullname(){
        return `${this.fname} ${this.lname}`
    }

    set fullname(fullname){
        const [fname, lname] = fullname.split(" ")
        this.fname = fname
        this.lname =lname
    }
}

const user1 = new Person("Anita", "Mishra", 21)
console.log(user1.fullname)
// console.log(user1.classIf())  // static method we can't call by object
console.log(Person.classIf())
// console.log(user1.desc)  ----> can't call using object
console.log(Person.desc)