// array can be written in different way

const Arr = [0, 1, 2, 3, 4,]

const myArr = ["Manav", "Patel"]

const myArray = new Array(4, 5, 1, 7, 8)

// console.log(Arr[4])
// console.log(myArr[0])
// console.log(myArray[3])

//************************* */ Array methods********************************************

// Arr.push(5)
// Arr.push(6)
// Arr.pop(4)

// Arr.unshift(2)
// Arr.shift()

// console.log(Arr.includes(9))
// console.log(Arr.indexOf(2))

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

//******************* */ slice , splice *********************

console.log("A", Arr)

const myn1 = Arr.slice(1, 3)
console.log(myn1)

console.log("B", Arr)

const myn2 = Arr.splice(1, 3)
console.log(myn2)
