let person = prompt("What is your age");
console.log(person);

let age = Number(20);

let message;

if(person >= 21) {
    message = "You can enter and drink alcohol";
}
else if(person >= 19) {
    message = "You can enter but you can not drink alcohol";
}
else {
    message = "You can not enter";
}
console.log(message);

