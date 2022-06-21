// lexical function

function func(){
    const var1 = "Value1"
    console.log("hello")

    function func1(){
        const var1 = "Value1"
        // console.log(var1)

        const func2 = function(){
            console.log("The Value of Var1 is:", var1)
        }
        func2()
    }

    func1()
    // func2()
}

func()