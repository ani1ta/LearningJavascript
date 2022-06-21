// new keyword
// new keyword automatically create object

function person(firstName, lastName, age, email, address){
    // const user = Object.create(person.prototype) --->> iska kam new keyword karega
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.email = email
    this.address = address
    // user.about = userMethod.about
    // user.Isage = userMethod.Isage

    // return user

}

person.prototype.about = function(){
    return `${this.firstName} is ${this.age} years ols`
}

person.prototype.Isage = function(){
    return this.age>=18
}

person.prototype.sing = function(){
    return "Toonna tonna to na n "
}

const user1 = new person("Anita", "Mishra", 21, "Anni@gmail.com", "yjbvcfdty")
const user2 = new person("Anuj", "Mishra", 18, "Annu@gmail.com", "yjbstyrtyhty")
const user3 = new person("Mani", "pandeey", 26, "Mani@gmail.com", "trtbvcfdty")
const user4 = new person("Divya", "yadav", 3, "divya@gmail.com", "rertyhjhv")
console.log(user1)
console.log(user1.Isage())
console.log(user4.Isage())
console.log(user4.about())
console.log(user1.about())
console.log(user2.about())
