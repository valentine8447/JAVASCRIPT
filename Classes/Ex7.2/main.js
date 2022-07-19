
class Person {
    constructor(param1, param2) {
        this.firstname = param1;
        this.lastname = param2;
    }
    fullname(){
return this.firstname + " " + this.lastname;
    }
}

let person1 = new Person("bo", "strez");
let person2 = new Person("Ljupco", "Trajanobski");

console.log("Hello,", person1.fullname());
console.log("Hello,", person2.fullname());
