// find method

const Mystring = ["cats", "dog", "parrot"]
function string(Mystring){
    return Mystring.length === 3
}

console.log(Mystring.find(string))

const users =[
    {userId:1, fname:"anita"},
    {userId:2, fname:"divyaa"},
    {userId:3, fname:"priti"},
    {userId:4, fname:"anuj"},
]

function user(users){
    return users.userId ==2
}
console.log(users.find(user))