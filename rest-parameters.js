// rest Parameter

function myFunc(a, b, ...c){
    console.log(`value of a is ${a}`)
    console.log(`value of a is ${b}`)
    console.log(`value of a is ${c}`)
}
myFunc(1, 2, 3, 6, 8, 9, 4, 3, 2, 1)


function myarray(...numbers){
    let total = 0
    for(let number of numbers){
        total = total + number
    }
    return total
}

const Myarrya = myarray(1, 2, 4, 6, 7)
console.log(Myarrya)