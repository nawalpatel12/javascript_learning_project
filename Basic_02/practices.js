function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 25);
console.log(`My name is ${person1.name} and age is ${person1.age}`)