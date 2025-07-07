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

class person {
    #status;
    constructor (name, age, status) {
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep() {
        console.log(`${this.name} sleep at 10PM`);
    
    }
    action() {
        console.log(this.#getStatus());
    }
    #getStatus(){
        return this.#status;
    }
}

const solimuddin = new person("solin", 12, "single");
solimuddin.action();


