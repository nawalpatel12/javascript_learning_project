// Function



function sayMyName(){
console.log("M")
console.log("A")
console.log("N")
console.log("A")
console.log("V")

}

//sayMyName()

// function addTwoNumbers(num1, num2){  // parameters

//     console.log(num1 + num2)

// }

function addTwoNumbers(num1, num2){ // parameters

    // let result = num1 + num2 

    // return result

    // console.log("Manav")

    return num1 + num2 

}    

const result = addTwoNumbers(4, 4) // arguments

console.log("Result: ", result)



function loginUserNmae(username = "Patel"){

   // if(username == undefined)
        if(!username){
        console.log("please enter a username")

        return

    }
    return `${username} just login in`
}

//console.log(loginUserNmae("Manav"))

console.log(loginUserNmae())