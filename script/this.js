// const person = {
//     name: "gias",
//     action: function() {
//         console.log(this.name)
//     }

// }


// person.action();


// console.log(this);



// class person{
//     #status;
//     constructor(name, age , status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     }
//     sleep() {
//         console.log(`${this.name} sleep at 10PM`);
//     }
//     action() {
//         console.log(this.#status)
//     }
// }

// const solimuddin = new person("soiim", 12, "single");
// solimuddin.action();

// class person {
//     #status;
//     constructor (name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.#status = status;
//     }
//     sleep() {
//         console.log(`${this.name} sleep at 10PM`);
    
//     }
//     action() {
//         console.log(this.#getStatus());
//     }
//     #getStatus(){
//         return this.#status;
//     }
// }

// const solimuddin = new person("solin", 12, "single");
// solimuddin.action();




// class person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const person1 = new person("Riyad", 25);
// console.log(person1.name);
// console.log(person1.age);



// class person {
//     #status;
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.#status = status;
//     }
//     action() {
//         console.log(this.#status);
//     }
// }

// const person2 = new person("Ahmed", 30, "married");
// person2.action();



// class person {
//     #status;
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.#status = status;
//     }
//     action() {
//         console.log(this.#getStatus());
//     }
//     #getStatus() {
//         return this.#status;
//     }
// }

// const person3 = new person("Fatema", 27, "single");
// person3.action();



// class person {
//     #status;
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.#status = status;
//     }
//     sleep() {
//         console.log(`${this.name} sleeps at 10PM`);
//     }
//     action() {
//         this.sleep();
//         console.log(this.#getStatus());
//     }
//     #getStatus() {
//         return this.#status;
//     }
// }


// const person4 = new person("Ruman", 22, "engaded");
// person4.action();


// class person {
//     #status;
//     constructor ( name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.#status = status;
//     }
//     action() {
//         if (this.age > 18) {
//             console.log(`${this.name} is an adult and is ${this.#getStatus()}`)
//         } else {
//             console.log(`${this.name} is a minor.`);
//         }
//     }
//     #getStatus() {
//         return this.#status;
//     }
// }

// const person5 = new person("Raihan", 19, "single");
// person5.action();


