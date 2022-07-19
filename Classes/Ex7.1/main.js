class Person{
    constructor(param1, param2) {
        this.firstname = param1;
        this.lastname = param2;
    }
}

let person1 = new Person("Valentina", "Dimovska");
let person2 = new Person("Goran", "Miloevski");

console.log("Hello", person1.firstname, person1.lastname);
console.log("Hello", person2.lastname, person2.lastname);

