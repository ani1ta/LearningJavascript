// Method in outside the function

const userMethod ={
    about: function(){
        return (`${this.firstName} is ${this.age} years old`)

    },
    Isage: function(){
        return this.age>=18
    },
    sing: function(){
        return "tona tona toonnnaana"
    }
}

function person(firstName, lastName, age, email, address){
    const user = Object.create(userMethod)
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.address = address
    // user.about = userMethod.about
    // user.Isage = userMethod.Isage

    return user

}

const user1 = person("Anita", "Mishra", 21, "Anni@gmail.com", "yjbvcfdty")
const user2 = person("Anuj", "Mishra", 18, "Annu@gmail.com", "yjbstyrtyhty")
const user3 = person("Mani", "pandeey", 26, "Mani@gmail.com", "trtbvcfdty")
const user4 = person("Divya", "yadav", 3, "divya@gmail.com", "rertyhjhv")
console.log(user1)
console.log(user1.Isage())
console.log(user4.Isage())
console.log(user4.about())
console.log(user1.about())
console.log(user2.about())
console.log(user1.sing())
