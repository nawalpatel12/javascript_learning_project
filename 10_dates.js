 // Dates

 let myDate = new Date()
 console.log(myDate.toString())
 console.log(myDate.toDateString())
 console.log(myDate.toISOString())
 console.log(myDate.toJSON())
 console.log(myDate.toLocaleDateString())
 console.log(myDate.toLocaleString())
 console.log(myDate.toLocaleTimeString())

console.log(typeof myDate)

// let myCreatedate = new Date(2026, 9, 13)
let myCreatedate = new Date("10-13-2026")

console.log(myCreatedate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedate.getTime())
console.log(Math.floor(Date.now()/1000))



 let newDate = new Date()
 console.log(newDate)
  console.log(newDate.getMonth() + 1)
   console.log(newDate.getDay())


   //`${newDate.getDay()} and the time`

 newDate.toLocaleString('default', {
    weekday: "long" ,
    // timeZone: ''
 })