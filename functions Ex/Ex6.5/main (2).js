1.//kreirame prazen array example: let nameOfArray = [];

let resultArray = [];

2.//kreirame for-loop koj bi iteriral 10 pati

let i = 0;
while(i < 10) {
  i++;
}

//4.5
for (let i = 0; i < 10; i++) {
  
  let result = sumOfTwoNumbers(i * 5, i * i);
resultArray.push(result);
}

3.//kreirame funkcija sto prima 2 parametri i gi sobira parametrite 
//i go vraka nivniot resultat

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2
}


  

//6.
console.log(resultArray);


