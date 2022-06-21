// sort method

const numbers = [55, 12, 3, 6, 8, 9000]
numbers.sort()
console.log(numbers)

const string = ['priti', 'divya', 'anita', 'manisha', 'shivam', 'anuj', "Anita"]
string.sort()
console.log(string)

const number = numbers.sort((a,b)=>{
    return a-b
})
console.log(number)


const users = [
    {productId:"1", product:"tv", price:23000},
    {productId:"2", product:"mobile", price:300000},
    {productId:"3", product:"tablet", price:40000},
    {productId:"4", product:"Pc", price:60000}
]

const LowPrice = users.sort((a,b)=>{
    return a.price-b.price
})

console.log(LowPrice)


const Highprice = users.sort((a,b)=>{
    return b.price-a.price
})

console.log(Highprice)