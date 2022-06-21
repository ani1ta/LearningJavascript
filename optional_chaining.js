// optional chaining means ---> if variable is not present we print that then if we ue optional chianing then it prints undefined
// like example

const user ={
    fname: "Anita", 
    address: "Housenumber"
}

console.log(user?.fname)
// console.log(user.address)
console.log(user?.address?.Housenumber)
// console.log(user.address.Housenumber)
