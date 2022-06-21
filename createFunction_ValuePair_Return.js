// function
// 1. create function
// 2. value pair
// 3. return

function person(firstName, lastName, age, email, address){
    const user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.address = address
    user.about = function(){
        return (`${this.firstName} is ${this.age} years old`)
    }
    user.Isage = function(){
        return age>=18
    }
    return user

}

const user1 = person("Anita", "Mishra", 21, "Anniemis@gmail.com", "agtuibm")
console.log(user1)
console.log(user1.firstName)
console.log(user1.about())
console.log(user1.Isage())

