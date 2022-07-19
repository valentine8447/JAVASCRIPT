1.//write a function that takes one parametar
//and write it to the console
//call the function three times with three different data values
//example: "string", 32, true


function tina(params) {
    let you = prompt("hi are you baby");
    console.log("very nice", you , "!");
    
}
tina ();

2.//write a function that takes two numbers parametars
//we should check if the parametars are numbers 
//if the parametars are numbers multiplay them and then console them
//else console.log that the parametars are invalid

function vale(para) {
console.log(para);
    
}
vale("nekoj text");
vale(32);
vale(true);




function multiplyTwoNumbers(num1, num2) {
    if(typeof num1 === "number" &&typeof num2 === "number") {
        console.log(num1 * num2);
} else {
    console.log(num1, "or", num2, "are not numbers");
}
}
multiplyTwoNumbers(3, 5);
multiplyTwoNumbers("tekst", 56);
multiplyTwoNumbers(4, true);

3.//write a javascript function that accepts a number as parametar and check 
//the number is even or odd.outpu the result in console

let someNumber = 4;
console.log(someNumber, someNumber % 2 === 0);

function oddOrEven(myNumber) {
    if (myNumber % 2 === 0) {
        console.log("EVEN");}
        else {
            console.log("ODD");
        }
        
    }
    
oddOrEven(5);
oddOrEven(10);
oddOrEven(17);

4.//write the functiom that checks whether a passed string is palindrome 
//or not

let myWord = "madam";

let myWordReversed = myWord.split("").reverse().join("");
console.log(myWordReversed === myWord);



