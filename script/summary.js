// const person = {
//     name: "gias",
//     age: 12,
//     1:100,
//     father: {
//         name:"dfdfd",
//         age: 12,
//     }
// }

// console.log(Object.keys(person));
// console.log(Object.values(person))
// console.log(Object.entries(person))
// console.log(Object.entries(person))

// console.log(person.name);

// console.log(person["name"]);
// console.log(person[1]);

// console.log(person?.mother?.name);

// const numbers = [23,4,3,45,564,545,5,3];

// const newNumbers = numbers.map(num => num * num);
// console.log(newNumbers);




// const products = [
//     { name: "iphone", price: 1000 },
//     { name: "samsung", price: 800 },
//     { name: "google pixel", price: 900 }
//   ];


//   products.forEach(p => {
//     if(p.name === "iphone") {
//       console.log(p);  
//     }
//   });


const products = [
    { id: 1, name: "iphone", color: "black", price: 12000, brand: "apple"},
    
    { id: 2, name: "xiaomi", color: "black", price: 150000, brand: "xiaomi"},
    { id: 3, name: "iphone", color: "black", price: 100, brand: "apple"},
    { id: 4, name: "xiaomi", color: "black", price: 1000, brand: "xiaomi"},
    { id: 5, name: "samsumg", color: "black", price: 2000, brand: "samsumg"},

];

// const singleProduct = products.find(p => p.color === "black");
// console.log(singleProduct);




// const newProduct = products.filter(p => p.id !=3);
// console.log(newProduct);


// const newProduct = products.filter(p => p.color === "gold");
// console.log(newProduct);


// products.forEach(p => {
//     if(p.name === "iphone"){
//         console.log(p)
//     }
// })



// class Person{
//     constructor(name, age){
//         this.age = age;
//         this.name = name;
//     }
// }

// class Hena extends Person{
//     constructor(name, age ,status){
//         super(name,age)
//     }
// }








// // const hena =new Person("hena", 21);
// // console.log(hena);

// what will be the value of y? 

// // const {x, y, z} = {x: 1, y1: 2, z: 3};
// // console.log(y)
// const cube=x=> x*x*x; 
// console.log(cube(2))