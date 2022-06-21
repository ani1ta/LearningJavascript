// change the value of prototype

function hello(){
    console.log('hello')
}

hello.prototype = []
console.log(hello.prototype)

hello.prototype.push("1")
hello.prototype.push(1)
console.log(hello.prototype)