// ddefault parameter 

function addTwo(a,b=7){
    return a +b
}

const sumtwoNumber = addTwo(4)
console.log(sumtwoNumber)


function addNumber(a, b){
    if(b==undefined){
        b=7
    }
    return a+b
}

const AddNumber = addNumber(8)
console.log(AddNumber)