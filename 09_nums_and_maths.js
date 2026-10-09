const score = 200
console.log(score)

const balance = new Number(300)

console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 58.9755

console.log(otherNumber.toPrecision(4))

const hundred = 100000000
console.log(hundred.toLocaleString('en-IN'))

//**********Maths******************

const hundred = 1200000
console.log(Math)
console.log(Math.abs(4))
console.log(Math.round(8.75))
console.log(Math.ceil(8.75))
console.log(Math.floor(7.75))

console.log(Math.min(4,8,1,7,0))
console.log(Math.max(4,8,1,7,0))


console.log(Math.random())
console.log((Math.random()*10 ) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)