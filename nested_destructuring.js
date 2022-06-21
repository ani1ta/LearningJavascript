// nested destructuring

const user= [
    {userid:1, fname:"Anita", lname:"Mishra"},
    {userid:2, fname:"Divya", lname:"Mishra"},
    {userid:3, fname:"Shivam", lname:"Pandey"},
    {userid:4, fname:"Manisha", lname:"yadav"},
    {userid:5, fname:"Anuj", lname:"Mishra"},
]


let [{fname:firstname}, {lname:lastname}, {userid:userId}] = user
console.log(firstname)
console.log(lastname)
console.log(userId)
console.log(user)