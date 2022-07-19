/*let count = 0;

while (count < 10) {
   console.log(count < 10);
   console.log("message" + count);
   count++;

   
}
console.log(count < 10);*/



/*  let i = 0;

while (i < 10) {
   console.log(i);
   i++;
   
}
console.log(i < 10);  */

// Random Broj od 0 do 10
/*let randomNumber = Math.floor(Math.random() * 10) + 1;

let checkNumber = true;
let message = "Enter a nubmer between 1 and 10";

while (checkNumber) {
    let number = parseInt(prompt(message));

    if (number > randomNumber) {
        message = "You gueesed heighter then the number!!";
    } else if (number < randomNumber) {
        message = "You gueesed lower then the number!!";
    } else if (number === randomNumber) {
        alert("You gueesed the number you won!!");
        checkNumber = false;
    } else {
        message = "Prati bezveze informacija";
    }
}*/


/*let i = 0;

while (i <= 10) {
   console.log(i);
   i++;

}
for(let i = 0; i <= 10; i++) {
console.log(i);
}*/

/*let myArray = ["First", "Second", "Third", "Four", "Five"];

for(let i = 0; i < myArray.length; i++) {
   if(myArray[i].startsWith "F") {
   console.log(myArray[i]);}

}*/

let myArray = [];

for (let i = 0; i < 5; i++) {
   let myObject = {
      name: "Lesson" + (i + 1),
      status: i % 2 === 0
   }
     
   }
   
myArray.push(myObject);
console.log(myArray);
