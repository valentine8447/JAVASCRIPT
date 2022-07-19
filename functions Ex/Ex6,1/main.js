/*function addTwoNumbers(paramA, paramB) {
  return paramA + paramB;

}
console.log(addTwoNumbers(5, 6));
console.log(addTwoNumbers(10, 11));
console.log(addTwoNumbers(11, 12));

function logInConsole(parametar, vtorParametar) {
    console.log(parametar + ":", vtorParametar);
}

logInConsole("Test 1", "Tina");
logInConsole("Test 2", "Simona");
logInConsole("Test 3", "Nikola");
logInConsole("Test 4", "Barabara");*/
    

//EX 6.2


// Kreirame arej so 4tri string elementi ex: "Strong", "Smart", "Fast"....
let descArr = ["Strong", "Smart", "Fast", "Beautiful"];
//Kreirame funkcija bez prametri ex: funtion imeNaFunkija() { }
function nameDescripiton() {
    // Vo block scope-ot na samata funkcija kreirame variabla Sto ke povikuva prompt("What's your name ?");
    let name = prompt("What's your name ?");
    // Pot samata variabla za imeto kreirame variabla sto ke zacuvuva random  broj od 0 do 3
    let randomNumber = Math.floor(Math.random() * 4);
    // Na kraj od funkcijata povikuvame console.log(ImetoNaVariablataPromt, "is", imetoNaArejot[randomBrojot])
    console.log(name, "is", descArr[randomNumber])
}
// I na kraj ja povikuvame funkcijata
nameDescripiton();