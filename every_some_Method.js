// every method
// /some method


// every
const numbers = [2, 6, 8, 10]
const isEven = numbers.every((number)=>{
    return number%2==0
})
console.log(isEven)

const number = [2, 6, 5, 8, 10]
const IsEven = number.every((numbers)=>{
    return numbers%2==0
})
console.log(IsEven)



const num = [3, 5, 7]
const Even = num.some((n)=>{
    return n%2==0
})
console.log(Even)


const num1 = [3, 7, 9]
const Isodd = num1.some((n1)=>{
    return n1%2!=0
})
console.log(Isodd)