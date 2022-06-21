// Callback function

function myFunc2(){
    let name = "Anita"
    console.log("This is my Function2")
    console.log("name is", name)
}

function myFun1(Callback){
    console.log("This is function1")
    Callback(name)
}

myFun1(myFunc2)