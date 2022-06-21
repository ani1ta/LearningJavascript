// Most important methods in array
// 1. forEach
// 2. map
// 3. filter
// 4. reduce

// forEach

// numbers = [1, 2, 4, 6, 9]

// function multiplyby2(number, index){
//     // console.log("index is:", index)
//     // console.log("number is:", number*2)
// }

// for(let i=0; i<numbers.length; i++){
//     multiplyby2(numbers[i], i)
// }

// numbers.forEach(function(number, index){
//     console.log(number*2, index)
// })

// const users = [
//     {firstname:"anita", age: 21},
//     {firstname:"divya", age: 22},
//     {firstname:"pritu", age: 27}
// ]

// users.forEach(function(user){
//     console.log(user.firstname)
//     console.log(user.age)
// })

// for(let user of users){
//     console.log(user.firstname)
// }

// users.forEach(function(user, index){
//     console.log(user.firstname, index)
// })



// map

// const numbers = [2, 3, 4, 7, 8, 10]

// const square = function(numbers){
//     return numbers*numbers
// }

// console.log(numbers.map(square))


// // using arrow function

// const sq = ((number, index)=>{
//     // return number
//     return index

// })

// console.log(numbers.map(sq))


// const users = [
//         {firstname:"anita", age: 21},
//         {firstname:"divya", age: 22},
//         {firstname:"pritu", age: 27}
// ]

// const user1 = users.map((user)=>{
//     return user.firstname
// })
// console.log(user1)
// // console.log(users.map(user1))



// filter
// const numbers = [2, 3, 4, 7, 8, 10]

// const isEven = function(n){
//     return n%2==0
// }

// const EvenNumberss = numbers.filter(isEven)
// console.log(EvenNumberss)

// const isOdd = function(a){
//     return a%2!=0
// }

// const OddNumbers = numbers.filter(isOdd)
// console.log(OddNumbers)


// reduce

const array = [2, 4, 6, 8]

const ans = array.reduce((accumulator, cuurentvalue)=>{
    return accumulator+cuurentvalue
})

console.log(ans)


const users = [
    {productId:"1", product:"tv", price:23000},
    {productId:"2", product:"mobile", price:30000},
    {productId:"3", product:"tablet", price:40000},
    {productId:"4", product:"Pc", price:60000}
]

const ans1 = users.reduce((total, currentprpduct)=>{
    return currentprpduct.price+total

},0)
console.log(ans1)