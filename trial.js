// # Parameter: x, y
// def add(x, y):  
//     return x + y  

// # Argument: 5, 3
// result = add(5, 3)  
// print(result)  # Output: 8


// function def(x, y){

//     return x + y;
// }

// console.log(defl(5,6))


//  function greet(name){
//     console.log(`Hello, ${name}!`);
//  }

//  greet("Alice");
//  greet("Bob");

// function greet(name="hh"){
//     console.log(`Hello , ${name}`);
// }

// greet("alicea");
// greet();

// function calculateFare(km, baseFare = 100, perKmFare = 20){
//  let totalFare = baseFare + (km * perKmFare);
// console.log(`total fare for ${km} km is ${totalFare} taka.`);

// }

// calculateFare(10);
// calculateFare(4,5);

// function calculateDiscount(price, discount = 0){
//     let finalPrice = price - (price * discount / 100);

//     console.log(`Final price after discount: ${finalPrice}`);
// };

// calculateDiscount(1000, 10)

// calculateDiscount(500, 39)


// Access Value, nested object, Optional chaining etc


// const adventurer = {
//     name: "Alice",
//     cat:{
//         name: "Dinah",
//     }
// }

// const dogName = adventurer .dog?.name;
// console.log(dogName);
// console.log(adventurer.someNonExistentMethod?.())

// const user = {
//     profile: {
//         username: "alice",
//     }
// }

// console.log(user.profile?.username);

// console.log(user.profile?.age);
// console.log(user.setting?.theme);


// const array1 = [3, 54,67, 7, 8, 4];

// const map1 = array1.map((x) => x * x);

// // console.log(map1);

// // const numbers =[ 2,4,6];
// // const roots = numbers.map((num) => Math.sqrt(num));
// const products = [
//     { name: "sports car" },
//     { name: "laptop" },
//     { name: "phone" },
//   ];
  
//   products.map((product) => {
//     product.price = 100;
//   });

//   console.log(products)


// const numbers = [23,34,45,56,67,64];

// const filteredNumbers = numbers.filter(num => num > 30);

// console.log(filteredNumbers);

// const numbers = [23, 34, 45, 56, 67,8 ,34];

// const foundNumber = numbers.find(num => num > 40);

// console.log(foundNumber);




// const numbers = [34,24,45];

// numbers.forEach(num => console.log(num * 2));


// const numbers = [12, 14, 56];

// const doubleNumbers = numbers.map(num => num * 2);

// console.log(doubleNumbers);

// const students = [
//     {name: "alice", marks: 85},
//     {name: "bob", marks:34},
//     {name: "charlie", marks: 98},
//     {name: "david", marks: 40}
// ];

// // const passedStudents = students.filter(student => student.marks > 60);

// console.log(passedStudents);

// const firstPaddedStudent = students.find(student => student.marks > 60);

// // console.log(firstPaddedStudent);

// const updatedMarks = students.map(student => ({
//     name: student.name,
//     marks: student.marks + 5
// }));

// console.log(updatedMarks);

// students.forEach(student => console.log(student.name));


// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name}makes a noise.`);
//     }
// }


// class Dog extends Animal {
//     bark(){
//         console.log(`${this.name} barks.`);
//     }
// }


// const myDog = new Dog("Buddy");

// myDog.speak();
// myDog.bark()