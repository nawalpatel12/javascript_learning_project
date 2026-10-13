const user = {
    username : "Manav@" ,
    price : 349,

    welcomeMessage: function() {
        console.log (`${this.username}, welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Patel"
// user.welcomeMessage()

console.log(this)

// function chai(){
  //  let username = "Manav",
//     console.log(this.username)
// }

// chai()

// const chai = function(){

//      let username = "Manav"
//      console.log(this.username)
// }
const chai = () => {

     let username = "Manav"
     console.log(this);
}


//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2


console.log(addTwo(4,9))