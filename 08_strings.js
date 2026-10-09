const name = "   Manav   "
const anothername = " Patel"

//console.log(name + anothername + " raj");

console.log(`hello my name is ${name} and last name is ${anothername}`);

const gammename = new String('Ma-n-a-v')

console.log(gammename[0])
console.log(gammename.__proto__)
console.log(gammename.length)
console.log(gammename.toUpperCase())
console.log(gammename.charAt(2))
console.log(gammename.indexOf('n'))

const newString = gammename.substring(0,3)


console.log(newString)

const anotherstring = gammename.slice(-2, 5)

console.log(anotherstring)
console.log(name)
console.log(name.trim())


const url = "https://github.com/nawalpatel12"
console.log(url.replace('github','git'))

console.log(url.includes('manav'))

console.log(gammename.split('-'))