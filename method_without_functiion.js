// lil practice

// we doesn't use this in arrow function

// const user = {
//     fname: "anita",
//     age: 21,
//     about: ()=>{
//         console.log(this.fname, this.age)
//     }
// }

// user.about()
// user.about.call()


// method without function 

const user = {
        fname: "anita",
        age: 21,
        about(){
            console.log(this.fname, this.age)
        }
    }
user.about()
user.about.call(user)