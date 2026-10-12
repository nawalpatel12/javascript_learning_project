function calculateCartPrice(val1, val2, ...num1){  // rest 

  return num1

}

console.log(calculateCartPrice(200, 400, 600, 1200, 2000, 5000))

const user = {
    username: "Manav",
    prices: 299
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

handleObject({
    username: "Patel",
    price: 499
})

const myNewArray = [200, 300, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 300, 400, 500]))