// same method as base class

class animal{
    constructor(fname, age){
        this.fname = fname
        this.age = age
    } 

    eat(){
        return `${this.fname} eating Non-Veg`
    }

    isSuperCute(){
        return this.age<=3
    }

    isCute(){
        return true
    }
}

class dog extends animal{
    constructor(fname, age, speed){
        super(fname, age)
        this.speed =speed
    }

    run(){
        return `${this.fname} is running at ${this.speed}kmph!`
    }

    eat(){
        return `Modified eat: ${this.fname} eating`
    }
}

const dog1 = new dog("Tommy", 3, 34)
console.log(dog1)
console.log(dog1.run())
console.log(dog1.eat())
