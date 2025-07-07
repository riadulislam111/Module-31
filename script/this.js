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



class person {
    #status;
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    action() {
        console.log(this.#status);
    }
}

const person2 = new person("Ahmed", 30, "married");
person2.action();