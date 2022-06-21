// Block scope vs Function scope

// Block scope

{
    let fname = "Anita"
    console.log(fname)
}

// console.log(fname)------in let we can't acccess outside of the block

{
    const fname = "Anita"

}
// console.log(fname)------ in const we can't acccess outside of the block

{
    var fname = "Anita"
}

console.log(fname)  // in var we access the value outside the block


function myfunc1(){
    var lname = "Mishra"
    console.log(lname)

    const func2 = function(){
        let lname = "mishra"
        console.log("last name is:", lname)
    }

    func2()
}

myfunc1()