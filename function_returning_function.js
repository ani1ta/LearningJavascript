// function returning function

function func(){
    function fun2(){
        return "hello world"
    }
    return fun2()
}
const ans = func()
console.log(ans)
// console.log(ans())