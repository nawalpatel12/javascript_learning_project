// Singleton

// object literals

const mysym = Symbol("key1")

const JsUser =  {
    name: "manav",
    "full name": "Manav Patel",
    [mysym]: "mykey",
    age: 17,
    location: "birgunj",
    email: "manav@1gmail.com",
    isLoggedIn: false ,
    LastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

JsUser.email = "manav@15gmail.com"
// //Object.freeze(JsUser)
JsUser.email = "manav@12gmail.com"
// //console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting)
