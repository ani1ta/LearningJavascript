// function inside the function

function myFun1(){
    console.log("My function1")

    const myfun2 = ()=> {
        console.log("My function2")
    }

    const addtwo = (a, b)=>{
        return a+b
    }
    const mult = (a, b)=>{
        return a*b
    }

    myfun2()
    console.log(addtwo(4, 5))
    console.log(mult(4, 4))

}

myFun1()