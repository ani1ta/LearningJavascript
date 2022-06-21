// prototype works only infunction
// javaScript function = function + object

function hello(){
    console.log("Hello!! Dad.")
}
hello()
console.log(hello.name)  // function name batata hai

// we can add own property 

hello.myString = "Very good!!"
console.log(hello.myString)


// const hello = ["item1", 'item2']

if(hello.prototype){
    console.log("prototype is present")
}
else{
    console.log("Prototype is not present")
}