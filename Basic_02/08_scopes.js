let a = 300

if (true) {
let a = 10 
const b = 20
var c = 30
console.log("INNER:" , a)
}


// for (let i = 0; i < Array.length; i++){
//     const element = arrary[i];

// }



// console.log(a)
// //console.log(b)
// console.log(c)

function one(){
    const username= "Manav"

    function two(){
        const website = "Amazon"
        console.log(username)
    }

    //console.log(website)
    //two()
}

one()

if (true) {
    const username = "manav"
    if( username== "manav"){
        const website = "  Flipkart"
        console.log(username + website)
    }

    //console.log(website)
}

//console.log(username)



//********interesting+*********************** */
  
console.log(addone(5))

function addone(num){
  return num + 1
}



addtwo(5)

 
const addtwo = function(num){
    return num + 2
}

