// const tinderUser = new Object

const tinderUser = {}

tinderUser.id = "2201028bjfh"
tinderUser.name = "Manav"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const another_tenderUser = {
    email: "manav12@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Manav",
            lastname: "Patel"
        }
    }
}

//console.log(another_tenderUser)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2)
//console.log(obj3)

const o1 = { 1: "a", 2: "b", 3: "c" };
const o2 = { 4: "d", 5: "e" };
const o3 = { 6: "f" };

const obj = Object.assign({}, o1, o2, o3);
//console.log(obj);
const obj5 = {...o1, ...o2, ...o3}
//console.log(obj5)

const users = [
    {
        id: 1,
        email: "manav@"
    } ,
   {
        id: 1,
        email: "manav@"
    },
    {
        id: 1,
        email: "manav@"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
