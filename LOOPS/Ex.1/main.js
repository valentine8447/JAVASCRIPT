console.log("test");

let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
let rightNumber = false;

while (!rightNumber) {
    let userNumber = prompt("Enter a number between 0 and " + maxNumber);
    userNumber = Number(userNumber);

if (userNumber === randomNumber) {
    alert("You guessed the right number. Congrats");
        rightNumber = true;
    }
else if (userNumber > randomNumber) {
    alert("You guessed highier then the right number! Try again");
}
else {
    alert("You guessed lower then the right number! Try again");
}
}