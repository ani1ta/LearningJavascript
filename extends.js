// animal class
// 1. name 2. age
// method-- eat(), isSuperCute(), isCute()

class animal{
    constructor(fname, age){
        this.fname = fname
        this.age = age
    }

    eat(){
        return `${this.fname} is eating`
    }

    isSuperCute(){
        return this.age<=1
    }

    isCute(){
        return true
    }
}

// const animal1 = new animal("cat", 10)
// console.log(animal1)
// console.log(animal1.eat())
// console.log(animal1.isSuperCute())

class dog extends animal{
    
}


const dogs1  = new dog("Tommy", 2)
console.log(dogs1)
console.log(dogs1.eat())