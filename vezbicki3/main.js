//1.First get a number from the user
//declarirame variabla i vrednost od prompt("poraka do userot")

//2.da ja zememe variablata od userot i da ja konvertirame vo broj
//Vrednosta od Number(variabla) moze da ja dodelime na samata variabla ili da declarirame nova

//3.Treba da dobieme random broj Math.random() * 100 za da se dobie vrednost od 0 do 100
//Ja zaokruzuvame vrednosta so Math.floor();

//4.Deklarirame variabla prazna za poraka || example: let message;
//5.If()statement kadde bi se proverila logikata
if(brojOdUser < randomBrojot) {
    message = "Your number " + brojOdUser + " is smaller then " + randomBrojot;
} else if (brojOdUser === randomBrojot) {
    message = "Your number " + brojOdUser + " is equal to " + randomBrojot;
} else if (brojOdUser > randomBrojot) {
    message = "Your number " + brojOdUser + " is grater then " + randomBrojot;
} else {
    message = "You entered invalid number!"
}
//6.poraka vo console.log(message);